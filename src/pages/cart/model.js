// import * as homeApi from './service';

export default {
  namespace: 'Cart',
  state: {

  },
  effects: {
   
  },
  reducers: {
    save(state, { payload }) {
      return {...state, ...payload};
    },
  },
};
