import { BaseModal } from '../../ui/BaseModal/BaseModal'
import { useTranslation } from 'react-i18next'
import * as S from './AuthModal.styles'
import { AuthForm } from './AuthForm/AuthForm'
import { useModalContext } from '../../../hooks/useModalContext'

export const AuthModal = () => {
  const { activeModal, authModalTab, setAuthModalTab, closeModal } =
    useModalContext()
  const { t } = useTranslation()

  if (activeModal !== 'auth') return null

  return (
    <BaseModal
      isOpen={activeModal === 'auth'}
      onClose={closeModal}
      fullHeight={true}
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
    </BaseModal>
  )
}
