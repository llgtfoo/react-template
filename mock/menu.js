const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
export default {
  'GET /api/getMenus': (req, res) => {
    res.send({
      success: true,
      data: [
        {
          cname: '模块一',
          cnameKey: '/home',
          normalUrl: '/home',
          icon: 'icon-Moneymanagement-fill',
          children: [
            {
              cname: '子菜单一',
              cnameKey: '/home/index1',
              normalUrl: '/home/index1',
              icon: 'icon-Moneymanagement-fill',
            },
            {
              cname: '子菜单二',
              cnameKey: '/home/index2',
              normalUrl: '/home/index2',
              icon: 'icon-office-supplies-fill',
            },
          ],
        },
      ],
    });
  },
};
