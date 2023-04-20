import { createAction } from '@reduxjs/toolkit'

export const tickActionTypes = {
  TICK: 'TICK',
}
const addAction = createAction('TICK');
export const serverRenderClock = (isServer) => (dispatch) => {
  return dispatch({
    type: addAction,
    light: !isServer,
    ts: Date.now(),
  })
}

export const startClock = () => (dispatch) => {
  return setInterval(
    () => dispatch({ type: tickActionTypes.TICK, light: true, ts: Date.now() }),
    1000
  )
}
