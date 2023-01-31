import React, { FC } from 'react'
import 'antd/dist/reset.css'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles'
import { AppProps } from 'next/app'
import { wrapper } from 'src/redux'
import Layout from 'src/components/Layout'
import i18n from '../src/i18n'
import '../styles/globals.css'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <DndProvider backend={HTML5Backend}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </DndProvider>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  )
}

export default WrappedApp

