import { useState } from 'react'
import * as S from './Navbar.styles'
import profileIcon from '../../../../assets/icons/profile_icon.svg'
import { Overlay } from '../../../ui/Overlay/Overlay'
import { useWindowResize } from '../../../../hooks/useWindowResize'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import {
  handleLogoClick,
  handleScrollToSection
} from '../../../../utils/scrollTo'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import { useOverlayContext } from '../../../../hooks/useOverlayContext'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, isAuthLoading } = useAuthContext()
  const { openAuthModal, openLanguageModal } = useOverlayContext()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  useWindowResize(() => setIsOpen(false))

  const { t } = useTranslation()
  const currentLocation = useLocation()

  const currentLang =
    localStorage.getItem('vantrip_lang')?.toUpperCase() || 'ES'
  const currentCurrency =
    localStorage.getItem('vantrip_currency')?.toUpperCase() || 'EUR'

  const profileIconSrc = user?.avatar || profileIcon

  const handleProfileClick = (e) => {
    if (isAuthLoading) {
      e.preventDefault()
      return
    }

    if (!isAuthenticated) {
      e.preventDefault()
      openAuthModal('login')
      return
    }
  }

  return (
    <S.Nav>
      <S.LogoWrapper>
        <S.LogoLink
          to='/'
          onClick={(e) => {
            closeMenu()
            handleLogoClick(e, currentLocation.pathname)
          }}
        >
          <S.LogoIcon
            src='/assets/vantrip_logo_mobile_white.svg'
            alt='Vantrip Logo'
          />
          <S.LogoIconFull
            src='/assets/vantrip_logo_white.svg'
            alt='Vantrip Full Logo'
          />
        </S.LogoLink>
      </S.LogoWrapper>

      <Overlay isActive={isOpen} onClick={closeMenu} zIndex={500} />

      <S.LinksContainer $isOpen={isOpen}>
        <S.LinksWrapper>
          <Link
            to='/'
            onClick={(e) => {
              closeMenu()
              handleScrollToSection(e, currentLocation.pathname, 'campers')
            }}
          >
            {t('nav.campers')}
          </Link>
          <Link to='/locations' onClick={closeMenu}>
            {t('nav.locations')}
          </Link>
          <Link to='/instructions' onClick={closeMenu}>
            {t('nav.instructions')}
          </Link>
          <Link to='/about' onClick={closeMenu}>
            {t('nav.about')}
          </Link>
        </S.LinksWrapper>
        <S.ActionsWrapper>
          <S.ProfileButton type='button' onClick={handleProfileClick}>
            <img src={profileIconSrc} alt='' />
          </S.ProfileButton>
          <S.LanguageButton
            onClick={() => {
              openLanguageModal()
              closeMenu()
            }}
          >
            <span>🌐</span>
            <span>
              {currentLang} | {currentCurrency}
            </span>
          </S.LanguageButton>
        </S.ActionsWrapper>
      </S.LinksContainer>

      <S.HamburgerButton onClick={toggleMenu}>
        {isOpen ? 'X' : '☰'}
      </S.HamburgerButton>
    </S.Nav>
  )
}
