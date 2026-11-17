import styled from 'styled-components'
import { device } from '../../../../styles/breakpoints'

export const BookingContainer = styled.div`
  box-shadow: var(--vantrip-box-shadow);
  width: 100%;
  border-radius: var(--radius-m);

  ${device.tablet} {
    width: 50%;
  }

  ${device.laptop} {
    width: 100%;
  }
`
