import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { LayoutContainer, MainContainer } from './MainLayout.styles'

export const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutContainer>
  )
}
