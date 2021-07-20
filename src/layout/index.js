import RightContent from '@/components/RightContent';
import { getMenu } from '@/services/menu/index';
import { TwitterOutlined } from '@ant-design/icons';
import { history } from 'umi';

const loginPath = '/user/login';
export const layout = ({ initialState }) => {
  return {
    title: '系统名称', // 系统左上角logo
    logo: () => <TwitterOutlined style={{ fontSize: '40px', color: '#1890ff' }} />, // 系统左上角logo
    rightContentRender: () => <RightContent />,
    // 服务器获取菜单
    menu: {
      params: {},
      request: async () => {
        const { data } = await getMenu();
        return data;
      },
    },
    // footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    disableContentMargin: false,
    // 系统水印
    waterMarkProps: {
      content: '系统名称',
    },
    // 页面切换守卫
    onPageChange: () => {
      const { location } = history; // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    // 自定义 无权访问页面(403)
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
