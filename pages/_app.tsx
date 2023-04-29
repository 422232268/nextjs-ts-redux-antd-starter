import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {wrapper} from '../src/redux/store'
import Layout from 'src/components/Layout'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

const WrappedApp: FC<AppProps> = ({ Component, ...pageProps }) =>{
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
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
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </ConfigProvider>
  )

}
export default WrappedApp

export const getServerSideProps = wrapper.getServerSideProps(({ store }) => async (ctx) => {
  console.log('store', store)
  console.log('ctx', ctx)
  // getServerSideProps 函数本身需要的处理的逻辑代码
})

