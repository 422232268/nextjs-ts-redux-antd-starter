// counterSlice.ts 文件

import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  lastUpdate: number
  light: boolean
}
const initialState: CounterState = {
  lastUpdate: 0,
  light: false,
}

// 创建一个 Slice
export const counterSlice = createSlice({
  name: 'tick',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    serverRenderClock: () => ({
      light: false,
      lastUpdate: Date.now(),
    }),
    // 定义一个减的方法
    startClock: () => {
      setInterval(() => ({ light: true, lastUpdate: Date.now() }), 1000)
    },
  },
})
// 导出加减的方法
export const { serverRenderClock, startClock } = counterSlice.actions

// 默认导出
export default counterSlice.reducer

// // actions
// import { createAction } from '@reduxjs/toolkit'

// export const tickActionTypes = {
//   TICK: 'TICK',
// }
// const addAction = createAction('TICK');
// export const serverRenderClock = (isServer) => (dispatch) => {
//   return dispatch({
//     type: addAction,
//     light: !isServer,
//     ts: Date.now(),
//   })
// }

// export const startClock = () => (dispatch) => {
//   return setInterval(
//     () => dispatch({ type: tickActionTypes.TICK, light: true, ts: Date.now() }),

// // reducer
// import { tickActionTypes } from './action'

// const tickInitialState = {
//   lastUpdate: 0,
//   light: false,
// }

// export default function reducer(state = tickInitialState, action) {
//   switch (action.type) {
//     case tickActionTypes.TICK:
//       return Object.assign({}, state, {
//         lastUpdate: action.ts,
//         light: !!action.light,
//       })
//     default:
//       return state
//   }
// }
