
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true,
    },
    children: [
      { path: '', component: () => import('src/pages/statistic/Statistic.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/login/Login.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
