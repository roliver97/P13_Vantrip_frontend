import { useState } from 'react'
import * as S from './Navbar.styles'
import profileIcon from '../../../../assets/icons/profile_icon.svg'
import { Overlay } from '../../../ui/Overlay/Overlay'
import { useWindowResize } from '../../../../hooks/useWindowResize'
import { LanguageModal } from '../../../modals/LanguageModal/LanguageModal'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangModalOpen, setIsLangModalOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  useWindowResize(() => setIsOpen(false))

  const { t } = useTranslation()

  const currentLang = localStorage.getItem('vantrip_lang').toUpperCase() || 'ES'
  const currentCurrency =
    localStorage.getItem('vantrip_currency').toUpperCase() || 'EUR'

  return (
    <S.Nav>
      <S.LogoWrapper>
        <S.LogoLink href='/'>
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

      <Overlay isActive={isOpen} onClick={toggleMenu} zIndex={5} />

      <S.LinksContainer $isOpen={isOpen}>
        <S.LinksWrapper>
          <a href='/destinations' onClick={toggleMenu}>
            {t('nav.destinations')}
          </a>
          <a href='/campers' onClick={toggleMenu}>
            {t('nav.campers')}
          </a>
          <a href='/instructions' onClick={toggleMenu}>
            {t('nav.instructions')}
          </a>
          <a href='/about' onClick={toggleMenu}>
            {t('nav.about')}
          </a>
        </S.LinksWrapper>
        <S.ActionsWrapper>
          <a href='/profile' className='profile-link' onClick={toggleMenu}>
            <img src={profileIcon} alt='' />
          </a>
          <S.LanguageButton onClick={() => setIsLangModalOpen(true)}>
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
