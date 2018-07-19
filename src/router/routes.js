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
      { path: 'add-trade', component: () => import('pages/form-trade') },
      { path: 'edit-trade', component: () => import('pages/form-edit-trade') },
      { path: 'new', component: () => import('pages/form-bank') },
      { path: 'edit', component: () => import('pages/form-edit-bank') },
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
