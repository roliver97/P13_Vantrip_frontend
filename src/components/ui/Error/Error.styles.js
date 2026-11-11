import styled from 'styled-components'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  gap: var(--space-m);
`

export const ErrorContent = styled.div`
  font-size: 0.9rem;
  color: var(--vantrip-light);

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: var(--space-xs);
`

export const ErrorButton = styled(DefaultButton)`
  font-size: 0.9rem;
`
