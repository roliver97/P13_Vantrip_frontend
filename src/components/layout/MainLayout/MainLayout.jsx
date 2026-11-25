import { useModalContext } from '../../../hooks/useModalContext'
import { AuthModal } from '../../modals/AuthModal/AuthModal'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import * as S from './MainLayout.styles'

export const MainLayout = ({ children }) => {
  const { activeModal } = useModalContext()
  return (
    <S.LayoutContainer>
      <S.VisibleLayout>
        <Header />
        <S.MainStyled>{children}</S.MainStyled>
      </S.VisibleLayout>
      <Footer />

      {activeModal === 'auth' && <AuthModal />}
    </S.LayoutContainer>
  )
}
