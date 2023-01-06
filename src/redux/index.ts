import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from 'src/redux/rootReducers'
import rootSaga from 'src/redux/rootSagas'

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper(makeStore)
