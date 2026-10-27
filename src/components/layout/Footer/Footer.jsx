import styled from 'styled-components'

const FooterStyled = styled.footer`
  width: 100%;
  background-color: var(--vantrip-dark);
  color: var(--vantrip-color-white);
  padding: var(--space-l);
  text-align: center;
`

export const Footer = () => {
  return (
    <FooterStyled>
      <p>&copy; 2026 Vantrip. All rights reserved.</p>
    </FooterStyled>
  )
}
