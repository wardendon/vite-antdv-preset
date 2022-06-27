import * as VueRouter from 'vue-router'

import home from '../views/HomeView.vue'
import about from '@/views/AboutView.vue'

const routes = [
  {
    name: 'index', // 页面名
    path: '/', // 映射的路径
    component: home, // 虽配置名为 component 组件，但我更愿意理解为 page 页面
  },
  {
    name: 'home',
    path: '/home',
    component: home,
  },
  {
    name: 'about',
    path: '/about',
    component: about,
  },
]

const router = VueRouter.createRouter({
  // 使用 HTML5 的历史记录模式
  history: VueRouter.createWebHistory(),
  routes,
})

export default router
