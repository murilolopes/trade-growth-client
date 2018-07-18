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
      { path: '', component: () => import('pages/bank') },
      { path: 'week', component: () => import('pages/week') },
      { path: 'trade', component: () => import('pages/trade') },
      { path: 'new', component: () => import('pages/form-bank') },
    ]
  },
  {
    path: '/login',
    component: () => import('pages/login'),
  },
  {
    path: '*', redirect: '/home'
  }
]
