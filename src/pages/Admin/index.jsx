import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { connect } from 'umi';

console.log(connect, 'connect');
const Admin = (props) => {
  console.log(props, 'props');
  const { dispatch, common } = props;
  useEffect(() => {
    dispatch({ type: 'common/getTopics' });
  }, []);
  return (
    <PageHeaderWrapper content="This page can only be viewed by admin">
      <ul>
        <h1>dva models测试</h1>
        {common.topics.map((value) => {
          return (
            <li key={value.key}>
              {value.key}----
              {value.desc}----->{value.owner}
            </li>
          );
        })}
      </ul>
    </PageHeaderWrapper>
  );
};
export default connect((state) => state)(Admin);
