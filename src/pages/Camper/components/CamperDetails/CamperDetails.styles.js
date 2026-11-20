import styled, { css } from 'styled-components'
import { device } from '../../../../styles/breakpoints'

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--vantrip-box-shadow);
  background-color: var(--vantrip-secondary);
  width: 100%;
  border-radius: var(--radius-m);

  ${device.tablet} {
    width: 600px;
  }

  ${device.laptop} {
    width: 800px;
  }
`

export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`

export const InfoWrapper = styled.div`
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
          border-bottom: 3px solid var(--vantrip-light);
        `
      case 'subtitle':
        return css`
          border-bottom: 1px solid var(--vantrip-light);

          span {
            font-weight: 500;
          }
        `
      case 'info':
        return css`
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          flex: 1;
        `
      case 'price':
        return css`
          gap: var(--space-s);
          text-align: center;
          flex: 1;
          background-color: var(--vantrip-primary);
          border-radius: var(--radius-l);
          border: 10px solid var(--vantrip-secondary);

          div {
            display: flex;
            flex-direction: column;
            flex: 1;
            height: 100%;
            justify-content: center;
            gap: var(--space-s);
          }
        `
    }
  }}
`

export const PricesSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`

export const NightsSpan = styled.span`
  font-size: 1rem;
  color: var(--vantrip-lighter);
`

export const CapacityWrapper = styled.div`
  display: flex;
  gap: var(--space-xs);

  span {
    font-size: 20px;
  }
`
