import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useOverlayContext } from '../../../hooks/useOverlayContext'
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
    <S.UserModal
      isOpen={isOpen}
      fullHeight={true}
      onClose={closeOverlay}
      zIndex={1000}
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
    </S.UserModal>
  )
}
