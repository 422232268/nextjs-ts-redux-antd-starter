// counterSlice.ts 文件

import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 1,
};

// 创建一个 Slice
export const counterSlice = createSlice({
  name: 'count',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    addCount: (state) => {
      console.log('state',state)
      state.count += 1;
    },
    // 定义一个减的方法
    decrement: (state) => {
      state.count -= 1;
    },
  },
});
// 导出加减的方法
export const { addCount, decrement } = counterSlice.actions;

// 默认导出
export default counterSlice.reducer;
