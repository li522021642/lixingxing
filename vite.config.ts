import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  base: '/lixingxing/', // 设置为GitHub仓库名称
})
