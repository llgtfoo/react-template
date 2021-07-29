const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
export default {
  'GET /api/getMenus': async (req, res) => {
    await waitTime(1000);
    res.send({
      success: true,
      data: [
        {
          name: '模块一',
          path: '/home',
          icon: 'icon-shoucang1',
          children: [
            {
              name: '子菜单一',
              path: '/home/index1',
            },
            {
              name: '子菜单二',
              path: '/home/index2',
            },
          ],
        },
        {
          name: '模块二',
          path: '/home2',
          icon: 'icon-twitter',
        },
      ],
    });
  },
};
