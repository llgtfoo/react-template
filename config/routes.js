export default [
  {
    name: 'login',
    path: '/login',
    component: '@/pages/Login/index',
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/index' },
      {
        path: '/index',
        component: '@/pages/Index/index',
      },
    ],
  },
  {
    component: '@/pages/404',
  },
];
