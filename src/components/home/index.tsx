import { NextPage } from 'next'
import styled from 'styled-components'
import { AButton } from '../base/AButton'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export const HomeComponent: NextPage = () => {
  return (
    <>
      <Title>My page</Title>
      <AButton type="primary">Hello</AButton>
    </>
  )
}
export default {}
