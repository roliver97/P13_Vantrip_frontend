import { useState } from 'react'
import * as S from './Navbar.styles'
import profileIcon from '../../../../assets/icons/profile_icon.svg'
import { Overlay } from '../../../ui/Overlay/Overlay'
import { useWindowResize } from '../../../../hooks/useWindowResize'
import { LanguageModal } from '../../../modals/LanguageModal/LanguageModal'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { handleLogoClick, scrollToSection } from '../../../../utils/scrollTo'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangModalOpen, setIsLangModalOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  useWindowResize(() => setIsOpen(false))

  const { t } = useTranslation()
  const currentLocation = useLocation()

  const currentLang =
    localStorage.getItem('vantrip_lang')?.toUpperCase() || 'ES'
  const currentCurrency =
    localStorage.getItem('vantrip_currency')?.toUpperCase() || 'EUR'

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
              scrollToSection(e, currentLocation.pathname, 'campers')
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
          <Link to='/profile' className='profile-link' onClick={closeMenu}>
            <img src={profileIcon} alt='' />
          </Link>
          <S.LanguageButton
            onClick={() => {
              setIsLangModalOpen(true)
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

      <LanguageModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      />
    </S.Nav>
  )
}
