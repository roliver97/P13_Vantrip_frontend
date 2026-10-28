import { useState } from 'react'
import * as S from './Navbar.styles'
import profileIcon from '../../../../assets/icons/profile_icon.svg'
import { Overlay } from '../../../ui/Overlay/Overlay'
import { useWindowResize } from '../../../../hooks/useWindowResize'
import { LanguageButton } from '../../../ui/LanguageButton/LanguageButton'
import { LanguageModal } from '../../../modals/LanguageModal/LanguageModal'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangModalOpen, setIsLangModalOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  useWindowResize(() => setIsOpen(false))

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
          <a href='/' onClick={toggleMenu}>
            Home
          </a>
          <a href='/vans' onClick={toggleMenu}>
            Vans
          </a>
          <a href='/about' onClick={toggleMenu}>
            About Us
          </a>
        </S.LinksWrapper>
        <S.ActionsWrapper>
          <a href='/profile' className='profile-link' onClick={toggleMenu}>
            <img src={profileIcon} alt='' />
          </a>
          <LanguageButton onClick={() => setIsLangModalOpen(true)} />
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
