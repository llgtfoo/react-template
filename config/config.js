import { defineConfig } from 'umi';
import proxy from './proxy';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  antd: {},
  history: {
    type: 'hash',
  },
  dva: {
    hmr: true,
  },
  targets: {
    ie: 10,
  },
  // layout: {
  //   // https://umijs.org/zh-CN/plugins/plugin-layout
  //   locale: true,
  //   siderWidth: 208,
  //   ...defaultSettings,
  // },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  routes,
  proxy,
  fastRefresh: {},
  ignoreMomentLocale: true,
  // mfsu: {},
  webpack5: {},
});
