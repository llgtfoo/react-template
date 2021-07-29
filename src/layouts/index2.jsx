import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import NavBar from '../components/NavBar/index';
import { getMenus } from '../services/menu/index';
import './index.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default function Index(props) {
  const [count, setCount] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getMenus().then((res) => {
      setMenus(res.data);
      const opener = res.data.length > 0 ? res.data[0].cnameKey : '';
      setOpenKeys(opener);
      const selector =
        res.data.length > 0
          ? res.data[0].children.length > 0
            ? res.data[0].children[0].cnameKey
            : res.data[0].cnameKey
          : '';
      setSelectedKeys(selector);
    });
  }, []);
  const JumpRouter = ({ item, key, keyPath, domEvent }) => {
    // console.log(item, key, keyPath, domEvent);
    history.push(key);
    setSelectedKeys(key);
  };
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
              // defaultSelectedKeys={openKeys}
              // defaultOpenKeys={selectedKeys}
              theme="dark"
              style={{ height: '100%', borderRight: 0 }}
              onClick={JumpRouter}
            >
              {menus &&
                menus.map((item) =>
                  item.children ? (
                    <SubMenu key={item.cnameKey} title={<>{item.cname}</>}>
                      {item.children.map((child) => (
                        <Menu.Item key={child.cnameKey}>
                          {child.cname}
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={item.cnameKey}>{item.cname}</Menu.Item>
                  ),
                )}
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
