import { useOverlayContext } from '../../../hooks/useOverlayContext'
import { AuthModal } from '../../modals/AuthModal/AuthModal'
import { CalendarModal } from '../../modals/CalendarModal/CalendarModal'
import { LanguageModal } from '../../modals/LanguageModal/LanguageModal'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import * as S from './MainLayout.styles'

export const MainLayout = ({ children }) => {
  const { activeOverlay } = useOverlayContext()
  return (
    <S.LayoutContainer>
      <S.VisibleLayout>
        <Header />
        <S.MainStyled>{children}</S.MainStyled>
      </S.VisibleLayout>
      <Footer />

      {activeOverlay === 'auth' && <AuthModal />}
      {activeOverlay === 'calendar' && <CalendarModal />}
      {activeOverlay === 'language' && <LanguageModal />}
    </S.LayoutContainer>
  )
}
