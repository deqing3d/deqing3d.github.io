# deqing3D.github.io

个人站点 + 3D 工作流笔记：

- `/`：个人首页（静态 HTML）
- `/ai-game/blender/`：Blender 栏位
- `/ai-game/ai-3d/`：AI-3D 栏位（3D 生产流程笔记）
- `/ai-game/rig/`：3D 人物骨骼栏位（15 种骨骼体系对比与选型）
- `/ai-game/`：自动跳转到 AI-3D

左侧选项对应独立页面，点击切换（不是同一页面上下堆叠）。

## 开发

```bash
npm install
npm run dev      # http://localhost:5173/ai-game/rig/
npm run build    # 构建到仓库根的 ai-game/ 目录
```

源码在 `web/`（React + Vite 多页面构建），构建产物 `ai-game/` 直接提交，
GitHub Pages（main 分支根目录）自动发布，访问 https://deqing3d.github.io/ai-game/ 。

## 新增栏目

1. 在 `web/src/data/pages.js` 的 `NAV` 与页面配置里添加条目；
2. 新建 `web/<栏目>/index.html`（`<div id="root" data-page="<栏目>">`）；
3. 在 `vite.config.js` 的 `rollupOptions.input` 里注册该入口。

## 文档转页面

`docs/人物骨骼.docx` → `web/src/data/rig.js` 由脚本生成：

```bash
python3 tools/docx_to_rig.py
```

脚本会保留标题层级、表格、骨骼树缩进、编号列表，并清理从网页复制时
粘连的图注（如标题后面的英文图片说明、孤立域名行）。改完 docx 重跑即可，
不要手改 `rig.js`。
