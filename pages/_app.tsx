import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from '../src/store/store'
import Layout from 'src/components/Layout'
import 'antd/dist/reset.css'
import { Provider } from 'react-redux'
import store from '../src/store/index'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  // const  { store, props } = wrapper.useWrappedStore(pageProps);
  return(
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default wrapper.withRedux(WrappedApp)
