//这里是公用的model

import Taro from '@tarojs/taro';
export default {
  namespace: 'common',
  state: {
   
  },

  effects: {

  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
