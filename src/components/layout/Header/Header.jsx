import styled from 'styled-components'
import { Navbar } from '../NavBar/NavBar'

const HeaderStyled = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--vantrip-color-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

export const Header = () => {
  return (
    <HeaderStyled>
      <Navbar />
    </HeaderStyled>
  )
}
