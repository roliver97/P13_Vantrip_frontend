import styled, { css } from 'styled-components'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'
import { device } from '../../../styles/breakpoints'
import { Link } from 'react-router-dom'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'

export const VanCard = styled(Link)`
  background: var(--vantrip-secondary, #ffffff);
  border-radius: var(--radius-m);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
  }
` // Link is a special react-router-dom component

export const VanImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  overflow: hidden;
`

export const SliderTrack = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.$translateIndex * -100}%);
`

export const VanImg = styled.div`
  min-width: 100%;
  height: 100%;
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
  flex: 1;
  justify-content: space-between;
`

export const TagsWrapper = styled(FlexContainer)`
  gap: var(--space-m);
`

export const PriceTag = styled.span`
  color: var(--vantrip-white);
  font-weight: 600;

  span {
    font-weight: 300;
  }

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
  font-size: 0.8rem;

  ${({ $selectDatesTag }) =>
    $selectDatesTag &&
    css`
      background-color: var(--vantrip-gray-darker);
      box-shadow: var(--vantrip-box-shadow-lighter);
      color: var(--vantrip-gray);
      font-size: 0.8rem;
      padding: var(--space-xs) 0;
    `}
`
