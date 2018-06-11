
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
    path: '/home2',
    children: [
      { path: '', component: () => import('pages/home') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
