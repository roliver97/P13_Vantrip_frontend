import styled from 'styled-components'
import { device } from '../../../../../styles/breakpoints'

export const BaseStepContainer = styled.div`
  width: 100%;
  flex: 1;
  min-width: fit-content;
  padding: 0;
  gap: var(--space-s);
  display: flex;
  flex-direction: column;

  ${device.desktop} {
    padding: 0 var(--space-3xl);
  }
`
