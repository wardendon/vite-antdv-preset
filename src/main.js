import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import { createPinia } from 'pinia'

const app = createApp(App)

// 全局插件注册
app.use(router).use(createPinia())
app.mount('#app')
