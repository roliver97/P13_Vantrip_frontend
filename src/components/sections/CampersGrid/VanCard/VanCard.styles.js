import styled, { css } from 'styled-components'
import { DefaultButton } from '../../../ui/DefaultButton/DefaultButton'
import { device } from '../../../../styles/breakpoints'
import { Link } from 'react-router-dom'

export const VanCard = styled(Link)`
  background: var(--vantrip-secondary, #ffffff);
  border-radius: var(--radius-m);
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
` // Link is a special react-router-dom component

export const VanImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
`

export const VanImg = styled.div`
  width: 100%;
  flex: 1;
  height: 200px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  border-radius: var(--radius-m) var(--radius-m) 0 0;
`

export const SliderButton = styled(DefaultButton)`
  position: absolute;

  ${({ $direction }) =>
    $direction === 'prev' &&
    css`
      left: 5px;
    `}

  ${({ $direction }) =>
    $direction === 'next' &&
    css`
      right: 5px;
    `}
`

export const VanInfo = styled.div`
  padding: var(--space-m);
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
`

export const PriceTag = styled.span`
  color: var(--vantrip-color-white);
  font-weight: 600;

  ${device.desktop} {
    font-size: 1.1rem;
  }
`

export const AvailabilityTag = styled.span`
  color: var(--vantrip-light);
  font-weight: 400;
  text-align: center;
  background-color: var(--vantrip-primary);
  border-radius: var(--radius-s);
  padding: var(--space-xs);
  font-size: 0.9rem;
`
