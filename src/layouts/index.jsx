import RightSetting from '@/components/RightSetting/index';
import { MediumOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Breadcrumb, Layout } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { history } from 'umi';
import { getMenus } from '../services/menu/index';
import './index.less';
const { Header, Content, Footer } = Layout;
export default ({ children }) => {
  const [pathname, setPathname] = useState('');
  const [mLoading, setMloading] = useState(true);
  //设置默认打开路由
  useEffect(() => {
    const path = history.location.pathname;
    setPathname(path);
  });
  //页面切换之前的拦截
  const onPageChange = () => {};
  const actionRef = useRef();
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        className="layout-box"
        loading={mLoading}
        actionRef={actionRef}
        fixedHeader={true}
        fixSiderbar={true}
        headerTheme="dark"
        navTheme="light"
        layout="mix"
        contentWidth="Fluid"
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: '系统名称',
        }}
        breadcrumbRender={(route) => route}
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        //渲染logo和名称
        headerTitleRender={() => {
          return (
            <div className="logo">
              <MediumOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
              <span>系统名称</span>
            </div>
          );
        }}
        //渲染菜单项
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/home');
              history.push(item.path);
            }}
          >
            {dom}
          </a>
        )}
        //导航栏右侧
        rightContentRender={() => <RightSetting />}
        //获取菜单
        menu={{
          // type: 'sub',
          // autoClose: true,
          loading: mLoading,
          params: {
            name: 'llgtfoo',
          },
          onLoadingChange: (loading) => {
            setMloading(loading);
          },
          request: async (params) => {
            const { data } = await getMenus(params);
            return data;
          },
        }}
        // 页面切换时拦截
        onPageChange={onPageChange}
        footerRender={false}
      >
        <PageContainer
          fixedHeader
          header={{
            // breadcrumb: '',
            title: '',
            //自定义面包屑
            breadcrumbRender: (props, originBreadcrumb) => {
              const breadcrumb =
                Object.keys(props.currentMenu).length > 0
                  ? props.currentMenu.locale.split('.').slice(1)
                  : [];
              return (
                <Breadcrumb>
                  {breadcrumb.map((item, index) => (
                    <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                  ))}
                </Breadcrumb>
              );
            },
          }}
        >
          <div
            style={{
              height: 'calc(100vh - 120px)',
              padding: '14px',
              background: '#fff',
            }}
          >
            <main className="main-content">{children}</main>
          </div>
        </PageContainer>
      </ProLayout>
    </div>
  );
};
