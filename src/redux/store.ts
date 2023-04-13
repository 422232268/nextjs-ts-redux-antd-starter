import { configureStore } from '@reduxjs/toolkit'
import StuReducer from './reducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  // 黑名单 不缓存的
  blacklist:['page404']
};

const persistedReducer = persistReducer(persistConfig, StuReducer);

const store = configureStore({
    reducer:persistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
