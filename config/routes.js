export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './Login/index',
          },
        ],
      },
    ],
  },
  {
    path: '/Welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome/index',
  },
  {
    path: '/admin',
    name: '系统',
    icon: 'crown',
    access: 'canAdmin',
    // component: './Admin/index',
    routes: [
      {
        path: '/admin/sub-page',
        name: '系统子page',
        icon: 'smile',
        component: './Admin/index',
      },
    ],
  },
  {
    name: '表格展示',
    icon: 'table',
    path: '/table',
    // component: './TableList',
    routes: [
      {
        path: '/table/list',
        name: '表格',
        icon: 'smile',
        component: './TableList',
      },
    ],
  },
  {
    path: '/',
    redirect: '/Welcome',
  },
  {
    component: './404',
  },
];
