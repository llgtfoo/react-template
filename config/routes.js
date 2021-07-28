export default [
  {
    path: '/',
    component: '@/layouts/BlankLayout',
    routes: [
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
          {
            path: '/demo',
            component: '@/pages/Test/index',
          },
          {
            component: '@/pages/404',
          },
        ],
      },
    ],
  },
  {
    component: '@/pages/404',
  },
];
