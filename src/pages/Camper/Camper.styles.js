import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const CamperPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: var(--space-xs);
  margin: var(--space-m);
  flex: 1;

  ${device.tablet} {
    flex-direction: row;
  }
`
