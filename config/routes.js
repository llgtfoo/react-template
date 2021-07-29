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
          { path: '/', redirect: '/home' },
          {
            path: '/home',
            component: '@/pages/module1/index',
            routes: [
              { path: '/home', redirect: '/home/index1' },
              {
                path: '/home/index1',
                component: '@/pages/module1/children/meus1/index',
              },
              {
                path: '/home/index2',
                component: '@/pages/module1/children/meus2/index',
              },
            ],
          },
          // {
          //   path: '/index',
          //   component: '@/pages/Index/index',
          // },
          // {
          //   path: '/demo',
          //   component: '@/pages/Test/index',
          // },
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
