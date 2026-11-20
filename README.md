# deqing3D.github.io

个人站点 + 3D 工作流笔记：

- `/`：个人首页（静态 HTML）
- `/ai-game/blender/`：Blender 栏位
- `/ai-game/ai-3d/`：AI-3D 栏位（3D 生产流程笔记）
- `/ai-game/`：自动跳转到 AI-3D

左侧选项对应独立页面，点击切换（不是同一页面上下堆叠）。

## 开发

```bash
npm install
npm run dev      # http://localhost:5173/ai-game/ai-3d/
npm run build    # 构建到仓库根的 ai-game/ 目录
```

源码在 `web/`（React + Vite 多页面构建），构建产物 `ai-game/` 直接提交，
GitHub Pages（main 分支根目录）自动发布，访问 https://deqing3d.github.io/ai-game/ 。

## 新增栏目

1. 在 `web/src/data/pages.js` 的 `NAV` 与页面配置里添加条目；
2. 新建 `web/<栏目>/index.html`（`<div id="root" data-page="<栏目>">`）；
3. 在 `vite.config.js` 的 `rollupOptions.input` 里注册该入口。
