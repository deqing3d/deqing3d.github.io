# deqing3D.github.io

个人站点 + 子页面：

- `/`：个人首页（静态 HTML）
- `/ai-game/`：AI-3D 实验台（React + Vite 构建产物）

## 开发

```bash
npm install
npm run dev      # 本地开发（http://localhost:5173/ai-game/）
npm run build    # 构建到仓库根的 ai-game/ 目录
```

源码在 `web/`，构建产物 `ai-game/` 直接提交，GitHub Pages（main 分支根目录）自动发布，
访问 https://deqing3d.github.io/ai-game/ 。

新增栏位：编辑 `web/src/data/content.js` 的 `modules` 数组即可，侧栏、进度、锚点会自动跟随。
