import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/github-ci-demo/',
  build: {
    // 设置 publicPath 为部署目标地址
    publicPath: 'https://mingrongyou.github.io/github-ci-demo/',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
