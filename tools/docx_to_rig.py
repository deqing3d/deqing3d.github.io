#!/usr/bin/env python3
"""把 人物骨骼.docx 转成页面数据文件 web/src/data/rig.js。

处理要点：
- 标题层级 H1/H2/H3 → 章节 / 小节
- 15 张表格 → table 块
- 骨骼树（├── └── │）→ code 块
- 编号段落连续出现 → list 块
- 网页复制残留清理：标题里粘的图注、孤立域名行、“官方网站：X” 粘连、空段
"""
import html
import json
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCX = ROOT / 'docs' / '人物骨骼.docx'
OUT = ROOT / 'web' / 'src' / 'data' / 'rig.js'

NS_T = re.compile(r'<w:t[^>]*>(.*?)</w:t>', re.S)
TREE_CHARS = set('├└│┌┐┘┬┴┼─▼')

# 标题里粘连了网页图注，按原文语义截断
HEADING_FIX = {
    '6. CC4（Character Creator 4）Advanced AccuRIG: Auto Rig 3D Models | Character Creator': '6. CC4（Character Creator 4）',
    '7. DAZ RigPosing Genesis 9 to Stand Out | Daz 3D': '7. DAZ Rig',
    '8. DAZ MHXPharah v5 for Blender v3': '8. DAZ MHX',
    "9. CloudRigBlender Studio drops “Storm” rig for Blender 5.0 | DIGITAL PRODUCTION": '9. CloudRig',
    '10. MakeHumanFree software for content creation - Godot Forums': '10. MakeHuman',
    "11. Unreal MannequinNewbie question, what do the mannequin's IK_foot/Ik_hand bones do? - Character & Animation - Epic Developer Community Forums": '11. Unreal Mannequin',
    '12. Unity HumanoidUnity 5': '12. Unity Humanoid',
    '13. HumGen RigV4 - Human Generator Documentation - Obsidian Publish': '13. HumGen Rig',
    '14. Cascadeur（你写的 Cacadeur 应该是 Cascadeur）': '14. Cascadeur',
    '特别适合的动作Aerial Fighter | 3D Animations | iClone': '特别适合的动作',
    '踢击动作350 Boxing Animations': '踢击动作',
    'Tripo / Meshy / RodinUnity - Using Blender and Rigify': 'Tripo / Meshy / Rodin',
    'Mixamo / Cascadeur / 动作捕捉Unreal Engine 5 rediseña y reconstruye los secretos detrás de Echo – Estudio Arquitectos': 'Mixamo / Cascadeur / 动作捕捉',
    "AI 图片 → 3D 游戏角色Glenwys Cos20GloryLeague King's raid - Download Free 3D model by ilyakardailskiy [b1483d9] - Sketchfab": 'AI 图片 → 3D 游戏角色',
}

# 正文里粘连的参考资料后缀
META_SPLIT = ['官方网站：', '官网：', '文档：', '相关工具：', '项目：']
DOMAIN_RE = re.compile(r'^[a-z0-9][a-z0-9.\-]*\.[a-z]{2,}(/\S*)?$', re.I)
CITE_RE = re.compile(r'^[\u4e00-\u9fa5A-Za-z0-9 .\-]*\+\d+$')
CHAPTER_RE = re.compile(r'^([一二三四五六七八九十]+)、')
STEP_RE = re.compile(r'^Step\s*(\d+)[：:]\s*(.*)$')
LAYER_RE = re.compile(r'^(\d+)\.\s*(.+?)（(.+?)）$')
PLAN_RE = re.compile(r'^方案\s*([ABC])\s*[·・]\s*(.+)$')

NOISE_ONLY = {
    'Autodesk 帮助+1', 'GitHub+2', 'Blender Studio+1', 'Epic Developer Community+2',
    'manual.reallusion.com', 'ww.makehumancommunity.org+1', 'cascadeur.com+2',
    'Human Generator for Blender', 'Posing Genesis 9 to Stand Out | Daz 3D',
}



CAPTION_RE = re.compile(
    r'(?<=[\u4e00-\u9fa5。！？；、）])'
    r'([A-Z][A-Za-z0-9 \-\u2013:|,.\[\]\(\)\'\u2019\u201c\u201d&/+]{12,})$'
)


def clean_caption(text):
    """切掉中文句尾粘连的网页图注（英文标题），保留正文。"""
    m = CAPTION_RE.search(text)
    if not m:
        return text
    tail = m.group(1)
    if tail.count(' ') >= 3 or '|' in tail or ' - ' in tail:
        head = text[:m.start()].rstrip()
        if len(head) >= 4:
            return head
    return text

def unescape(s):
    return html.unescape(s)


def para_text(p):
    return unescape(''.join(NS_T.findall(p))).strip()


def para_raw(p):
    """保留行首空白，用于骨骼树的缩进。"""
    return unescape(''.join(NS_T.findall(p))).rstrip()


def main():
    z = zipfile.ZipFile(DOCX)
    xml = z.read('word/document.xml').decode('utf-8')
    rels = dict(re.findall(r'Id="(rId\d+)"[^>]*?Target="([^"]+)"',
                           z.read('word/_rels/document.xml.rels').decode('utf-8')))

    body = re.search(r'<w:body>(.*)</w:body>', xml, re.S).group(1)
    items = re.findall(r'<w:tbl>.*?</w:tbl>|<w:p\b[^>]*>.*?</w:p>|<w:p\b[^>]*/>', body, re.S)

    nodes = []          # 扁平节点
    title = None
    for it in items:
        if it.startswith('<w:tbl'):
            rows = []
            for tr in re.findall(r'<w:tr\b.*?</w:tr>', it, re.S):
                cells = []
                for tc in re.findall(r'<w:tc>.*?</w:tc>', tr, re.S):
                    cells.append(unescape(' '.join(para_text(p) for p in
                                                   re.findall(r'<w:p\b[^>]*>.*?</w:p>', tc, re.S))).strip())
                if cells:
                    rows.append(cells)
            if rows:
                nodes.append({'t': 'table', 'head': rows[0], 'rows': rows[1:]})
            continue

        text = para_text(it)
        raw = para_raw(it)
        style = re.search(r'<w:pStyle w:val="([^"]+)"', it)
        level = int(style.group(1)) if style and style.group(1) in ('1', '2', '3') else 0
        is_list = '<w:numPr>' in it

        # 真实外链（排除图片直链）
        href = None
        for rid in re.findall(r'r:id="(rId\d+)"', it):
            target = rels.get(rid, '')
            if target.startswith('http') and 'images.openai.com' not in target:
                href = target
                break

        if not text:
            continue

        if level == 1 and title is None:
            title = text
            continue

        text = HEADING_FIX.get(text, text)
        if not text:
            continue

        # 清掉纯引文行
        if text in NOISE_ONLY:
            continue
        if DOMAIN_RE.match(text) or CITE_RE.match(text):
            if href is not None:
                nodes.append({'t': 'link', 'label': text, 'href': href})
            continue

        if CHAPTER_RE.match(text):
            nodes.append({'t': 'h1', 'text': text, 'chapter': True})
        elif level == 1:
            nodes.append({'t': 'h1', 'text': text})
        elif level == 2:
            nodes.append({'t': 'h2', 'text': text})
        elif level == 3:
            nodes.append({'t': 'h3', 'text': text})
        else:
            nodes.append({'t': 'p', 'text': clean_caption(text), 'raw': raw, 'list': is_list})

    # 清理段落尾巴上粘连的“官方网站：X”
    for n in nodes:
        if n['t'] == 'p':
            for marker in META_SPLIT:
                idx = n['text'].find(marker)
                if idx > 0:
                    head, meta = n['text'][:idx], n['text'][idx:]
                    if 0 < len(meta) <= 60 and not head.endswith('；'):
                        n['text'] = head
                        n['meta'] = meta
                    break

    # 切章节
    sections, intro = [], []
    cur = None
    for n in nodes:
        if n['t'] == 'h1' and n.get('chapter'):
            cur = {'id': None, 'title': n['text'], 'raw': []}
            sections.append(cur)
        elif cur is None:
            intro.append(n)
        else:
            cur['raw'].append(n)

    SUBTITLE = {}

    def roman_num(text, fallback):
        return fallback

    out_sections = []
    for si, sec in enumerate(sections, start=1):
        sec['id'] = f'sec-{si}'
        num = f'{si:02d}'
        out_sections.append({
            'id': sec['id'],
            'num': num,
            'title': sec['title'],
            'blocks': build_blocks(sec['raw']),
        })
    page = {
        'id': 'rig',
        'title': title or '3D 人物骨骼',
        'sections': out_sections,
        'intro': build_blocks(intro),
    }
    js = "// 由 人物骨骼.docx 自动生成，勿手改；改文档后重新生成\n"
    js += 'export const RIG_PAGE = ' + json.dumps(page, ensure_ascii=False, indent=2) + '\n'
    OUT.write_text(js, encoding='utf-8')
    print('sections:', len(out_sections))
    for s in out_sections:
        kinds = {}
        for b in s['blocks']:
            kinds[b['t']] = kinds.get(b['t'], 0) + 1
        print(f"  {s['num']} {s['title'][:30]:32s} {kinds}")


def build_blocks(raw):
    """把节点序列整理成渲染块，含几种特化分组。"""
    blocks = []
    i = 0
    n = len(raw)
    while i < n:
        node = raw[i]

        # 1) 五层概念栈：标签（含括号英文）+ 描述 + 工具
        if node['t'] == 'p' and LAYER_RE.match(node['text']):
            group = []
            j = i
            while j < n and raw[j]['t'] == 'p':
                m = LAYER_RE.match(raw[j]['text'])
                if not m:
                    break
                label = raw[j]['text']
                desc = raw[j + 1]['text'] if j + 1 < n and raw[j + 1]['t'] == 'p' else ''
                tools = raw[j + 2]['text'] if j + 2 < n and raw[j + 2]['t'] == 'p' else ''
                group.append({'title': label, 'desc': desc, 'tools': tools})
                j += 3
            if len(group) >= 3:
                blocks.append({'t': 'stack', 'items': group})
                i = j
                continue

        # 2) 角色选型卡：名称 + 推荐： + 原因：
        if (node['t'] == 'p' and i + 2 < n
                and raw[i + 1]['t'] == 'p' and raw[i + 1]['text'].startswith('推荐：')
                and raw[i + 2]['t'] == 'p' and raw[i + 2]['text'].startswith('原因：')):
            blocks.append({'t': 'roles', 'items': [{
                'name': node['text'],
                'rec': raw[i + 1]['text'][len('推荐：'):],
                'why': clean_caption(raw[i + 2]['text'][len('原因：'):]),
            }]})
            i += 3
            continue

        # 合并相邻的 roles
        if node['t'] == 'roles' and blocks and blocks[-1]['t'] == 'roles':
            blocks[-1]['items'].extend(node['items'])
            i += 1
            continue

        # 3) 步骤：Step N：标题 + 内容
        if node['t'] == 'p':
            m = STEP_RE.match(node['text'])
            if m:
                step = {'num': m.group(1), 'title': m.group(2), 'lines': []}
                j = i + 1
                while j < n and raw[j]['t'] in ('p', 'link'):
                    if raw[j]['t'] == 'p' and STEP_RE.match(raw[j]['text']):
                        break
                    if raw[j]['t'] == 'link':
                        step['lines'].append({'link': raw[j]['label'], 'href': raw[j]['href']})
                    elif raw[j]['t'] == 'p' and not raw[j]['text'].startswith('Step'):
                        step['lines'].append({'text': clean_caption(raw[j]['text'])})
                    j += 1
                if blocks and blocks[-1]['t'] == 'steps':
                    blocks[-1]['items'].append(step)
                else:
                    blocks.append({'t': 'steps', 'items': [step]})
                i = j
                continue

        # 4) 方案块：方案 A · 推荐 + 副标题 + 组合
        m = PLAN_RE.match(node['text']) if node['t'] == 'p' else None
        if m:
            plan = {'label': f"方案 {m.group(1)}", 'tag': m.group(2), 'sub': '', 'combo': ''}
            j = i + 1
            if j < n and raw[j]['t'] == 'p':
                plan['sub'] = raw[j]['text']
                j += 1
            if j < n and raw[j]['t'] == 'h1':
                plan['combo'] = raw[j]['text']
                j += 1
            if blocks and blocks[-1]['t'] == 'plans':
                blocks[-1]['items'].append(plan)
            else:
                blocks.append({'t': 'plans', 'items': [plan]})
            i = j
            continue

        # 5) 骨骼树：含制表符的连续段落
        if node['t'] == 'p' and any(ch in node['text'] for ch in TREE_CHARS):
            lines = []
            j = i
            while j < n and raw[j]['t'] == 'p' and any(ch in raw[j]['text'] for ch in TREE_CHARS):
                lines.append(raw[j].get('raw', raw[j]['text']))
                j += 1
            # 树前紧邻的单行根节点标签（Hips / Root / CTRL / 全ての親 …）并入代码块
            if blocks and blocks[-1]['t'] == 'p':
                prev = blocks[-1]['text']
                if len(prev) <= 24 and not prev.endswith(('：', '。', '；', ':')):
                    lines.insert(0, prev)
                    blocks.pop()
            blocks.append({'t': 'code', 'text': '\n'.join(lines)})
            i = j
            continue

        # 6) 编号段落 → 连续 list
        if node['t'] == 'p' and node.get('list'):
            items = []
            j = i
            while j < n and raw[j]['t'] == 'p' and raw[j].get('list'):
                items.append(raw[j]['text'])
                j += 1
            blocks.append({'t': 'list', 'items': items})
            i = j
            continue

        # 小节名下面的「名称 + 类型」两行短文本 → 副标题行
        if (node['t'] == 'h2' and i + 2 < n
                and raw[i + 1]['t'] == 'p' and len(raw[i + 1]['text']) <= 40
                and '：' not in raw[i + 1]['text'] and not LAYER_RE.match(raw[i + 1]['text'])
                and raw[i + 2]['t'] == 'p' and len(raw[i + 2]['text']) <= 40
                and '：' not in raw[i + 2]['text']):
            blocks.append({'t': 'h2', 'text': node['text']})
            blocks.append({'t': 'lead', 'name': raw[i + 1]['text'], 'tag': raw[i + 2]['text']})
            i += 3
            continue

        if node['t'] == 'h1':
            # 章节内残留的一级标题降为小节
            blocks.append({'t': 'h2', 'text': node['text']})
        elif node['t'] == 'h2':
            blocks.append({'t': 'h2', 'text': node['text']})
        elif node['t'] == 'h3':
            blocks.append({'t': 'h3', 'text': node['text']})
        elif node['t'] == 'table':
            blocks.append(node)
        elif node['t'] == 'link':
            blocks.append({'t': 'link', 'label': node['label'], 'href': node['href']})
        else:
            blk = {'t': 'p', 'text': node['text']}
            if node.get('meta'):
                blk['meta'] = node['meta']
            if node['text'].startswith(('推荐场景：', '注意：', '特别重要：', '说明：', '我的核心建议：', '需要注意：')):
                blk['t'] = 'note'
            blocks.append(blk)
        i += 1
    return blocks


if __name__ == '__main__':
    main()
