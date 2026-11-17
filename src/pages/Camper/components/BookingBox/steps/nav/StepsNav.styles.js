import styled, { css } from 'styled-components'
import { DefaultButton } from '../../../../../../components/ui/DefaultButton/DefaultButton'

export const StepsNav = styled.div``

export const StepButton = styled(DefaultButton)`
  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: rgba(255, 255, 255, 0.15);
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      color: var(--vantrip-light);
    `}
`
