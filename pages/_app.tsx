import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from '../src/store/store'
import Layout from 'src/components/Layout'
import 'antd/dist/reset.css'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default wrapper.withRedux(WrappedApp)
