export default [
  {
    path: '/home',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/home') }
    ]
  },
  {
    path: '/bank',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/bank') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/login'),
  },
  {
    path: '*',
    component: () => import('pages/404')
  }
]
