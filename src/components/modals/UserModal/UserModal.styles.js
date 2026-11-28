import styled from 'styled-components'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--vantrip-white);
  gap: 20px;
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
  border: none;
`
