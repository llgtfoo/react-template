import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Index(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {});
  return (
    <div>
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  );
}
