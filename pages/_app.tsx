import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import Layout from 'src/components/Layout'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#2a292f',
        colorPrimaryBorder: 'red',
        colorInfo: '#eabc74',
        fontSize: 16,
        borderRadiusSM: 2,
        borderRadiusLG: 4,
        borderRadius: 4,
        wireframe: true,
      },
    }}
  >
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </ConfigProvider>
)

export default WrappedApp
