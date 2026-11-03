import styled, { css } from 'styled-components'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'

export const SearchContainer = styled(FlexContainer)`
  width: 80%;
  z-index: 100;

  ${({ $isSticky }) =>
    $isSticky
      ? css`
          position: fixed;
          top: 72px;
        `
      : css`
          position: absolute;
          top: calc(50svh);
          transform: translateY(-50%);
          background: transparent;
        `}
`

export const SearchInput = styled.input`
  height: 40px;
  border-radius: var(--radius-l);
  flex: 1;
  outline: none;
  text-align: center;
  border: 2px solid var(--vantrip-secondary);

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);

  &:focus {
    border: 3px solid var(--vantrip-secondary);
  }

  &::placeholder {
    font-size: 0.9rem;
  }
  &::-webkit-input-placeholder {
    font-size: 0.9rem;
  }
  &::-moz-placeholder {
    font-size: 0.9rem;
  }
  &:-ms-input-placeholder {
    font-size: 0.9rem;
  }
`
