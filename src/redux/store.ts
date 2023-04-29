import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import StuReducer from './reducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import counterReducer from './features/counter/counterSlice'


const persistConfig = {
  key: 'root',
  storage,
  // 黑名单 不缓存的
  blacklist:['page404']
};

const persistedReducer = persistReducer(persistConfig, StuReducer);

const store = configureStore({
    reducer:{
      counter: counterReducer,
      persistedReducer
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
