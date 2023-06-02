import { fileURLToPath, URL } from 'node:url'
import html from 'vite-plugin-html'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    html({
      inject: {
        injectData: {
          baseURL: 'https://mingrongyou.github.io/github-ci-demo/'
        }
      }
    })
  ],
  base: '/github-ci-demo/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
