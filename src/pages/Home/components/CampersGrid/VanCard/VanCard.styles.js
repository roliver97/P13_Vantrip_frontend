import styled, { css } from 'styled-components'
import { device } from '../../../../../styles/breakpoints'
import { Link } from 'react-router-dom'
import { FlexContainer } from '../../../../../components/ui/FlexContainer/FlexContainer'

export const VanCard = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
  background: var(--vantrip-secondary, #ffffff);
  border-radius: var(--radius-m);
  overflow: hidden;
  position: relative;
  box-shadow: var(--vantrip-box-shadow-lighter);

  &:hover {
    transform: translateY(-4px);
  }
`

export const VanCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  flex: 1;
` // Link is a special react-router-dom component

export const VanOwnerLink = styled(Link)`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100% 0 var(--radius-m) 0;
  position: absolute;
  bottom: 0;
  right: 0;

  opacity: 90%;
  transition: all 0.1s ease-in;

  &:hover {
    opacity: 100%;
    transform: scale(105%);
    border-radius: var(--radius-m) 0;

    box-shadow: var(--vantrip-box-shadow);
  }
`

export const VanOwnerAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const VanInfo = styled.div`
  padding: var(--space-m);
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  flex: 1;
  justify-content: space-between;

  h2 {
    font-size: 1.4rem;
  }
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
  align-self: center;
  width: fit-content;

  ${({ $selectDatesTag }) =>
    $selectDatesTag &&
    css`
      background-color: var(--vantrip-gray-darker);
      color: var(--vantrip-light);
      box-shadow: var(--vantrip-box-shadow-lighter);

      font-size: 0.8rem;
    `};
`
