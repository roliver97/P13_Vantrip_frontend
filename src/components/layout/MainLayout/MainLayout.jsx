import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { LayoutContainer, MainStyled } from './MainLayout.styles'

export const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainStyled>{children}</MainStyled>
      <Footer />
    </LayoutContainer>
  )
}
