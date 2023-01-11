import React, { FC } from 'react'
import styled from 'styled-components'
import {menuItems} from '../../controler/menu'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const MainWrapper = styled.div`
  text-align: center;
  padding-bottom: 70px;
`

// you should todo: mock data or fetch actual api to get menu items

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    {/* <Header menuItems={menuItems} /> */}
    <MainWrapper>{children}</MainWrapper>
    {/* <Footer /> */}
  </>
)

export default Layout
