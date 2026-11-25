import styled, { css } from 'styled-components'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'

export const AuthTabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--vantrip-dark);
  justify-content: space-between;
`

export const TabButton = styled(DefaultButton)`
  color: var(--vantrip-dark);
  border-radius: 0;
  background: none;
  font-weight: 400;

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 600;
    `};
`
