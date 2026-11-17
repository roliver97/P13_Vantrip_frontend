import styled, { css } from 'styled-components'
import { device } from '../../../../styles/breakpoints'

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;

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

export const BookingWrapper = styled.div`
  padding: var(--space-m);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-m);

  img {
    width: 20px;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'title':
        return css`
          padding: var(--space-l);
          border-bottom: 5px solid var(--vantrip-light);

          h2 {
            font-weight: 300;
          }
        `
      case 'form':
        return css`
          border-bottom: 1px solid var(--vantrip-primary);
          background-color: var(--vantrip-secondary);
          flex-direction: column;
          flex: 1;
          border-radius: 0 0 var(--radius-m) var(--radius-m);
        `
    }
  }}
`
