import { rule } from '../services/table/index';

export default {
  namespace: 'common',
  state: {
    topics: [],
  },
  // 初始化调用
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      // console.log(dispatch, history);
      // 监听路有变化
      history.listen(({ pathname }) => {
        console.log(pathname);
      });
    },
  },

  effects: {
    // 异步改变state中topics
    *getTopics({ data }, { call, put }) {
      // call 触发接口调用
      const result = yield call(rule);
      console.log(result, 'common');
      //   console.log(result, "result");
      if (result.success) {
        //   put 触发改变reducers中方法action
        yield put({ type: 'setTopics', data: result.data });
      }
    },
  },

  reducers: {
    // 改变state中topics
    setTopics(state, action) {
      //   console.log(state, action);
      return { ...state, topics: action.data };
    },
  },
};
