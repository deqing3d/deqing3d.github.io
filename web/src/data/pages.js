/**
 * 多页面配置。
 * 每个栏目是一个独立页面（/ai-game/blender/、/ai-game/ai-3d/），
 * 左上选项点击即跳转，不在同一页面堆叠。
 *
 * 区块（blocks）支持的类型：
 *   sub    —— 小标题
 *   text   —— 段落
 *   bullets —— 无序列表
 *   links  —— 链接列表 { href, label?, note? }
 *   prompt —— 提示词/命令原样块
 */

export const NAV = [
  { id: 'blender', label: 'Blender' },
  { id: 'ai-3d', label: 'AI-3D' },
]

const AI3D_SECTIONS = [
  {
    id: 'scene',
    num: '01',
    title: '创建 3D 场景资源',
    blocks: [
      { type: 'sub', title: '参考网站' },
      {
        type: 'links',
        items: [
          {
            href: 'https://feedough.com/ai-prompt-generator/',
            label: 'feedough.com/ai-prompt-generator/',
            note: '提示词生成',
          },
          { href: 'https://xkweimeng.github.io/ai-game-wiki/#mod-08' },
          { href: 'https://www.artstation.com/' },
        ],
      },
      { type: 'sub', title: '1.1 前提' },
      {
        type: 'text',
        text:
          '图片、各个部件、整体远景图、室内图、整体室内俯视图、单独室内图。',
      },
      { type: 'sub', title: '1.2 插件' },
      {
        type: 'bullets',
        items: [
          '材质：Realtime Materials',
          'blenderkit-v3.21.3.261002',
          'Blender Asset Library – 74,000+ Free & Paid 3D Assets | Blendkit',
          '结合 blender 插件 + AI',
        ],
      },
      { type: 'sub', title: '1.3 开源项目' },
      {
        type: 'links',
        items: [
          { href: 'https://github.com/neilsonnn/image-blaster' },
          { href: 'https://fal.ai/dashboard/keys', note: 'API keys' },
          { href: 'https://platform.worldlabs.ai/api-keys', note: 'API keys' },
        ],
      },
      { type: 'sub', title: '示例提示词' },
      {
        type: 'prompt',
        text:
          '查看和使用 image-blaster 文件夹中项目能力，将使用 claude 的全部能力适配为当前 agent 全部可用的功能 skill，放入到新的文件夹中；blast it and confirm each step with me，严格参考输入图片和视频，输出完整的 blender 文件大型 3d 游戏场景，要求符合写实的和 3A 级别的完整游戏场景，不是局部场景，输出到特定路径文件夹下，并在生成期间产出必要的规划、进度和原理说明文档供后续 ai 查看，导出的资源可以完全导入其他开发引擎中运行。',
      },
    ],
  },
  {
    id: 'model',
    num: '02',
    title: '创建 3D 模型 + 材质 + 骨骼 + 动画',
    blocks: [
      { type: 'sub', title: '2.1 创建模型' },
      {
        type: 'links',
        items: [
          {
            href: 'https://studio.tripo3d.com/',
            label: 'studio.tripo3d.com',
            note: 'tripo 3d 网页生成',
          },
          {
            href: 'https://developers.tripo3d.com/zh/docs',
            label: 'developers.tripo3d.com',
            note: 'tripo 3d API 文档',
          },
        ],
      },
      { type: 'sub', title: '动画' },
      {
        type: 'links',
        items: [
          { href: 'https://www.mixamo.com/' },
          { href: 'https://actionforge.app/' },
          { href: 'https://quaternius.com/' },
        ],
      },
      { type: 'sub', title: '2.2 没有骨骼的 3D 模型绑定骨骼和动画' },
      {
        type: 'prompt',
        text:
          '新建 blender 文件，使用 /Users/xx/Documents/qq/man/战术盔甲士兵/战术盔甲士兵.fbx 作为人物 3d 模型，添加 /Users/xx/Documents/qq/man/Rifle Aiming Idle.fbx 中骨骼和动画。',
      },
      { type: 'sub', title: '2.3 根据已有骨骼的 3D 模型创建动画' },
      { type: 'text', text: 'comfyUI 工作流 3d 模型本地创建。' },
      { type: 'sub', title: '2.2 骨骼' },
      { type: 'text', text: '动画生成带有动画的骨骼。' },
      {
        type: 'links',
        items: [
          { href: 'https://github.com/toyxyz/toyxyz_RGBMocap' },
          { href: 'https://github.com/flowhmr/flowhmr' },
        ],
      },
      { type: 'sub', title: '本地部署' },
      {
        type: 'links',
        items: [
          {
            href: 'https://my.feishu.cn/wiki/AZ1SwU7DAih9Cdkj1gocY4ugnTg',
            label: 'my.feishu.cn/wiki/AZ1SwU7DAih9Cdkj1gocY4ugnTg',
            note: 'MMR 骨骼重定向',
          },
          { href: 'https://github.com/xiaoerofficial021-collab/FlowHMR-Windows' },
          { href: 'https://huggingface.co/spaces/kehong/MoCapAnythingV2' },
        ],
      },
      { type: 'sub', title: 'tripo 3d' },
      {
        type: 'links',
        items: [
          { href: 'https://www.reallusion.com/character-creator/' },
          { href: 'https://app.mesh2motion.org/' },
          { href: 'https://www.mixamo.com/#/' },
          { href: 'https://accurig.pro/', label: 'accurig.pro', note: 'accurig' },
          {
            href: 'https://www.meshy.ai/zh/features/ai-auto-rigging',
            label: 'meshy.ai/zh/features/ai-auto-rigging',
            note: 'AI 自动绑定',
          },
          { href: 'https://hifer.ai/' },
          {
            href: 'https://www.reallusion.com/auto-rig/accurig/',
            label: 'reallusion.com/auto-rig/accurig/',
            note: '客户端',
          },
        ],
      },
      { type: 'sub', title: '本地' },
      {
        type: 'links',
        items: [
          { href: 'https://github.com/VAST-AI-Research/SkinTokens' },
          { href: 'https://github.com/VAST-AI-Research/UniRig' },
        ],
      },
    ],
  },
]

const BLENDER_SECTIONS = [
  {
    id: 'blender-empty',
    num: '01',
    title: '内容整理中',
    blocks: [
      {
        type: 'text',
        text: '该栏位的笔记还没整理，稍后补充。',
      },
    ],
  },
]

export const PAGES = {
  'ai-3d': {
    id: 'ai-3d',
    kicker: 'AI-3D · PIPELINE NOTES',
    title: '3D 生产流程',
    subtitle: '场景资源、模型、材质、骨骼与动画的完整链路，附参考站点与提示词。',
    sections: AI3D_SECTIONS,
  },
  blender: {
    id: 'blender',
    kicker: 'BLENDER · WORKFLOW',
    title: 'Blender',
    subtitle: 'Blender 相关流程记录，内容待补充。',
    sections: BLENDER_SECTIONS,
  },
}
