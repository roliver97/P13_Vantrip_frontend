import styled, { css } from 'styled-components'
import { device } from '../../../../styles/breakpoints'

export const BookingBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--vantrip-box-shadow);
  width: 100%;
  background-color: var(--vantrip-secondary);
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
            font-weight: 500;
          }
        `
      case 'form':
        return css`
          border-bottom: 1px solid var(--vantrip-primary);

          flex-direction: column;
          flex: 1;
          border-radius: 0 0 var(--radius-m) var(--radius-m);
        `
    }
  }}
`
