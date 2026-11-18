import styled, { css } from 'styled-components'
import { DefaultButton } from '../DefaultButton/DefaultButton'

export const VanImagesWrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  align-items: center;
  overflow: hidden;
  box-shadow: var(--vantrip-box-shadow-lighter);

  ${({ $variant }) => {
    switch ($variant) {
      case 'detail':
        return css`
          aspect-ratio: 16 / 10;
        `
    }
  }}
`

export const SliderTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.$translateIndex * -100}%);
`

export const VanImg = styled.div`
  min-width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
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
