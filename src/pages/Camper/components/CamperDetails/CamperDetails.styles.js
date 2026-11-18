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
    width: 50%;
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
    }
  }}
`

export const CapacityWrapper = styled.div`
  display: flex;
  gap: var(--space-xs);

  span {
    font-size: 20px;
  }
`
