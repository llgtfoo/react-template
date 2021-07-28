import { TwitterOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

const { Header } = Layout;
const { SubMenu } = Menu;
export default function Index(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {});
  return (
    <Header className="header">
      <div className="logo">
        <TwitterOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
        <span>系统名称</span>
      </div>
      <div className="right-content"></div>
    </Header>
  );
}
