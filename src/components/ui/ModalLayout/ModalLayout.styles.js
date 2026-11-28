import styled, { css } from 'styled-components'
import { device } from '../../../styles/breakpoints'

const placementFlexStyles = {
  'x-center y-center': css`
    justify-content: center;
    align-items: center;
  `,
  'x-center y-top': css`
    justify-content: center;
    align-items: flex-start;
    padding-top: 74px;
  `,
  'x-end y-top': css`
    justify-content: flex-end;
    align-items: flex-start;
    padding-top: 74px;
    padding-right: 10px;
  `
}

export const ModalViewport = styled.div`
  position: fixed;
  padding-top: 64px;
  inset: 0;
  display: flex;
  width: 100%;
  height: 100%;
  ${placementFlexStyles['x-center y-center']}

  z-index: ${({ $zIndex }) => $zIndex};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};

  ${device.tablet} {
    ${({ $placement }) => placementFlexStyles[$placement]}
  }
`
