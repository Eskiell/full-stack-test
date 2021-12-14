import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import factory from './factory'
const routes: Array<RouteRecordRaw> = [
  factory,
  {
    path: '',
    name: 'routerWelcome',
    meta: {
      guest: true
    },
    component: () => import('@/views/welcome.vue')
  },
  {
    path: '/login',
    name: 'routerLogin',
    meta: {
      guest: true
    },
    component: () => import('@/views/guest/login.vue')
  },
  {
    path: '/signup',
    name: 'routerSignup',
    meta: {
      guest: true
    },
    component: () => import('@/views/guest/signup.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('accessToken')) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!localStorage.getItem('accessToken')) {
      next()
    } else {
      next({ name: 'routerFactoryHome' })
    }
  } else {
    next()
  }
})

export default router
