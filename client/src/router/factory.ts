const Factory = {
  path: '/factory',
  meta: {
    requiresAuth: true
  },
  component: () => import('@/views/factory/index.vue'),
  children: [
    {
      path: '',
      name: 'routerFactoryHome',
      component: () => import('@/views/factory/main.vue')
    },
    {
      path: 'products',
      name: 'routerFactoryProducts',
      component: () => import('@/views/factory/products/index.vue')
    }
  ]
}
export default Factory
