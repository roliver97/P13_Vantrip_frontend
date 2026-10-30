import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import * as S from './MainLayout.styles'

export const MainLayout = ({ children }) => {
  return (
    <S.LayoutContainer>
      <S.VisibleLayout>
        <Header />
        <S.MainStyled>{children}</S.MainStyled>
      </S.VisibleLayout>
      <Footer />
    </S.LayoutContainer>
  )
}
