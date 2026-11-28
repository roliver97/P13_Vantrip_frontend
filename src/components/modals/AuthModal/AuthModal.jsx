import { ModalLayout } from '../../ui/ModalLayout/ModalLayout'
import { useTranslation } from 'react-i18next'
import * as S from './AuthModal.styles'
import { AuthForm } from './AuthForm/AuthForm'
import { useOverlayContext } from '../../../hooks/useOverlayContext'

export const AuthModal = () => {
  const { activeOverlay, authModalTab, setAuthModalTab, closeOverlay } =
    useOverlayContext()
  const { t } = useTranslation()

  if (activeOverlay !== 'auth') return null

  return (
    <ModalLayout
      placement='x-end y-top'
      isOpen={activeOverlay === 'auth'}
      onClose={closeOverlay}
    >
      <S.AuthTabs>
        <S.TabButton
          type='button'
          $isActive={authModalTab === 'register'}
          onClick={() => setAuthModalTab('register')}
        >
          {t('authModal.register')}
        </S.TabButton>
        <S.TabButton
          type='button'
          $isActive={authModalTab === 'login'}
          onClick={() => setAuthModalTab('login')}
        >
          {t('authModal.login')}
        </S.TabButton>
      </S.AuthTabs>

      <AuthForm key={authModalTab} />
      {/* key={authModalTab} will force the AuthForm component to re-render whenever the value of authModalTab changes. */}
    </ModalLayout>
  )
}
