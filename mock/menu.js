export default {
  'GET /api/getMenu': (req, res) => {
    res.send({
      success: true,
      data: [
        {
          path: '/Welcome',
          name: '欢迎页',
          //   icon: 'smile',
        },
        {
          path: '/admin',
          name: '系统',
          //   icon: 'crown',
          children: [
            {
              path: '/admin/sub-page',
              name: '系统子page',
              icon: 'smile',
            },
          ],
        },
        {
          name: '表格展示',
          //   icon: 'table',
          path: '/table',
          children: [
            {
              path: '/table/list',
              name: '表格',
              icon: 'smile',
            },
          ],
        },
        {
          name: '菜单',
          //   icon: 'table',
          path: '/menu',
          children: [
            {
              path: '/menu/list',
              name: '菜单显示',
              icon: 'smile',
            },
          ],
        },
      ],
    });
  },
};
