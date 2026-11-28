import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useOverlayContext } from '../../../hooks/useOverlayContext'
import { ModalLayout } from '../../ui/ModalLayout/ModalLayout'
import * as S from './UserModal.styles'

export const UserModal = () => {
  const { activeOverlay, closeOverlay } = useOverlayContext()
  const { user, logout } = useAuthContext()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const isOpen = activeOverlay === 'user'

  const handleProfileNav = () => {
    closeOverlay()
    navigate('/profile')
  }

  const handleLogout = async () => {
    closeOverlay()
    await logout()
    navigate('/')
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      fullHeight={false}
      onClose={closeOverlay}
      zIndex={1000}
      placement='x-end y-top'
    >
      <>
        {user?.username && <S.UserHeader>@{user.username}</S.UserHeader>}
        <S.MenuContainer onClick={(e) => e.stopPropagation()}>
          <S.MenuButton type='button' onClick={handleProfileNav}>
            {t('userMenu.profile', 'Profile')}
          </S.MenuButton>
          <S.MenuButton type='button' $isDanger onClick={handleLogout}>
            {t('userMenu.logout', 'Log out')}
          </S.MenuButton>
        </S.MenuContainer>
      </>
    </ModalLayout>
  )
}
