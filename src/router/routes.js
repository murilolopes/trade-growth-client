
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/home') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/login'),
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
