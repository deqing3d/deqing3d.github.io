import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 页面最终通过 https://deqing3d.github.io/ai-game/ 访问，
// 因此 base 必须是 /ai-game/，构建产物直接落到仓库根的 ai-game/ 目录（GitHub Pages 静态托管）。
export default defineConfig({
  root: 'web',
  base: '/ai-game/',
  plugins: [react()],
  build: {
    outDir: '../ai-game',
    emptyOutDir: true,
  },
})
