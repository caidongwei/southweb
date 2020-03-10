import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import(/* webpackChunkName: "home" */ '../views/home')
  },
  {
    path: '/solution',
    name: '解决方案',
    component: () => import(/* webpackChunkName: "solution" */ '../views/solution')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
