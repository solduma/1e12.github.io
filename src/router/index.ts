import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
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
    path: '/project/ey/samsung/e2e',
    name: 'ey-samsung-e2e',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/ey/samsung/sarimax',
    name: 'ey-samsung-sarimax',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/ey/samsung/gis',
    name: 'ey-samsung-gis',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/ey/samsung/survival',
    name: 'ey-samsung-survival',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/ey/samsung/staffing',
    name: 'ey-samsung-staffing',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/ey/samsung/scm',
    name: 'ey-samsung-scm',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/hcs/banner-ads',
    name: 'hcs-banner-ads',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/hcs/ga4',
    name: 'hcs-ga4',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/ey/emart/demand-forecasting',
    name: 'ey-emart-demand-forecasting',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/project/ey/nhinv/p13n',
    name: 'ey-nhinv-p13n',
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
