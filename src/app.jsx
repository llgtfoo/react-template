import { layout } from '@/layout/';
import { PageLoading } from '@ant-design/pro-layout';
import { history } from 'umi';
import { currentUser as queryCurrentUser } from './services/login/index';
import { request } from './utils/request';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
/** 获取用户信息比较慢的时候会展示一个 loading */

export const initialStateConfig = {
  loading: <PageLoading />,
};
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState() {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }

    return undefined;
  }; // 如果是登录页面，不执行

  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }

  return {
    fetchUserInfo,
    settings: {},
  };
}
// export const request = {
//   errorHandler: (error) => {
//     const { response } = error;

//     if (!response) {
//       notification.error({
//         description: '您的网络发生异常，无法连接服务器',
//         message: '网络异常',
//       });
//     }

//     throw error;
//   },
// }; // ProLayout 支持的api https://procomponents.ant.design/components/layout

// request接口请求工具
// export { layout, request };

export { layout, request };
