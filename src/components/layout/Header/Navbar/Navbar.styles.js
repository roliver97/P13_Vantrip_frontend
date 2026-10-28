import styled from 'styled-components'
import { device } from '../../../../styles/breakpoints'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: var(--space-s) var(--space-m);
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 40px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.98);
  }

  ${device.tablet} {
    height: 30px;
  }
`

export const LogoIcon = styled.img`
  height: 100%;
  ${device.tablet} {
    display: none;
  }
`

export const LogoIconFull = styled.img`
  display: none;
  height: 100%;
  ${device.tablet} {
    display: block;
  }
`

export const HamburgerButton = styled.button`
  z-index: 100;
  font-weight: 400;
  color: var(--vantrip-color-white);
  background: none;
  border: none;
  font-size: 1.5rem;
  ${device.tablet} {
    display: none;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex: 1;
  z-index: 10;
  flex-direction: column;

  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: var(--space-xxl);
  padding: var(--space-xxl) 0;
  background-color: var(--vantrip-secondary);
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? '-5px 0 20px rgba(0, 0, 0, 0.5)' : 'none'};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.1s ease-in-out;

  ${device.tablet} {
    position: static;
    flex-direction: row;
    gap: var(--space-xl);
    transform: none;
    padding: 0;
    box-shadow: none;
    background-color: transparent;
    justify-content: space-between;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  align-items: center;

  a {
    color: var(--vantrip-color-white);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    transition: color 0.2s ease;
    height: 30px;
    display: flex;
    align-items: center;

    &:hover {
      font-weight: 600;
      transform: scale(1.03);
      transition: transform 0.1s ease-in-out;
    }
  }

  ${device.tablet} {
    flex: 1;
    justify-content: center;
    flex-direction: row;
    gap: var(--space-xl);
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: var(--space-m);

  position: fixed;
  left: 24px;
  top: 20px;

  img {
    display: flex;
    height: 30px;
    justify-content: center;
  }

  a {
    &:hover {
      transform: scale(1.05);
      transition: transform 0.1s ease-in-out;
    }
  }

  ${device.tablet} {
    width: 200px;
    justify-content: end;
    position: static;
  }
`
