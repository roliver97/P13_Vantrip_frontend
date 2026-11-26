import styled from 'styled-components'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'
import { BaseModal } from '../../ui/BaseModal/BaseModal'
import { device } from '../../../styles/breakpoints'

export const UserModal = styled(BaseModal)`
  left: auto;
  top: 67px;
  right: 10%;
  max-width: none;
  min-width: none;
  width: 50%;
  transform: scale(1);

  ${device.tablet} {
    width: 200px;
    right: 5px;
    top: 67px;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--vantrip-primary);
`

export const UserHeader = styled.div`
  padding: var(--space-xs) var(--space-m);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vantrip-darker);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`

export const MenuButton = styled(DefaultButton)`
  width: 100%;
  background: none;
  border: none;
`
