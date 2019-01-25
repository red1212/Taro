// import * as homeApi from './service';

export default {
  namespace: 'Home',
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
