// index.ts 文件

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import count from './features/counterSlice.2'
import tick from './features/counterSlice.1'


// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counterSlice,
    count,
    tick
  },
});

const initStore = () => {
  // return createStore(reducer, bindMiddleware([thunkMiddleware]))
  return configureStore({
    reducer: {
      counterSlice,
      count,
      tick
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunkMiddleware]),
  })
}


// export const wrapper = createWrapper(initStore)

export default  store;
