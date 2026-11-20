import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

// 站点最终通过 https://deqing3d.github.io/ai-game/ 访问，
// 左侧每个选项是独立页面（/ai-game/blender/、/ai-game/ai-3d/），
// 构建产物直接落到仓库根的 ai-game/ 目录，由 GitHub Pages 静态托管。
export default defineConfig({
  root: 'web',
  base: '/ai-game/',
  plugins: [react()],
  build: {
    outDir: '../ai-game',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: r('web/index.html'),
        blender: r('web/blender/index.html'),
        'ai-3d': r('web/ai-3d/index.html'),
      },
    },
  },
})
