import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/index';
import { getMenus } from '../services/menu/index';
import './index.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default function index(props) {
  const [count, setCount] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [selectedKeys, setSelectedKeys] = useState(['1']);
  useEffect(async () => {
    const result = await getMenus();
    console.log(result, 'result');
  }, []);
  return (
    <>
      <Layout className="layout-nav">
        <NavBar></NavBar>
        <Layout className="menu-main">
          <Sider
            width={208}
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
            className="site-layout-background"
          >
            <Menu
              mode="inline"
              openKeys={openKeys}
              selectedKeys={selectedKeys}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              theme="dark"
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<>subnav 1</>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="site-layout-background">
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
