import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { outLogin } from '../../services/login/index';
import styles from './index.less';
export default function Index(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {});
  const loginOut = async () => {
    await outLogin();
    const { query = {}, pathname } = history.location;
    const { redirect } = query; // Note: There may be security issues, please note

    if (window.location.pathname !== '/login' && !redirect) {
      history.replace({
        pathname: '/login',
        search: stringify({
          redirect: pathname,
        }),
      });
    }
  };
  const onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      loginOut();
    }

    history.push(`/account/${key}`);
  };
  const menu = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Space direction="vertical">
        <Space wrap>
          <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
}
