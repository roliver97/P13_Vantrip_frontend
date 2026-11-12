import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

export const CamperPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xs);
  margin: var(--space-m);

  flex: 1;

  ${device.tablet} {
    grid-template-columns: 1fr 350px;
  }

  ${device.laptop} {
    grid-template-columns: 1fr 400px;
  }

  ${device.desktop} {
    grid-template-columns: 2fr 1fr;
  }
`
