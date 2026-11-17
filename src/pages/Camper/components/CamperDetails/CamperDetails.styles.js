import styled from 'styled-components'
import { device } from '../../../../styles/breakpoints'

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--vantrip-box-shadow);
  width: 100%;
  border-radius: var(--radius-m);

  ${device.tablet} {
    width: 50%;
  }

  ${device.laptop} {
    width: 800px;
  }
`

export const DetailInfo = styled.div`
  padding: var(--space-m);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--space-s);
  flex: 1;
  justify-content: space-evenly;
`
