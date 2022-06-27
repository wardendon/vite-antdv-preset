import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importLess: true })],
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/globalVariable.scss" as *;',
      },
      less: {
        // 定制antdv主题
        modifyVars: {
          'primary-color': '#48A367',
          'link-color': '#1DA57A',
          'border-radius-base': '5px',
        },
        javascriptEnabled: true,
      },
    },
  },
})
