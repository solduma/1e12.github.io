import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/momo',
    name: 'momo',
    component: () => import('../views/MomoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
