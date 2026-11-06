import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  padding: var(--space-s) var(--space-m);
  border-radius: var(--radius-s);
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: var(--vantrip-light);
          color: var(--vantrip-primary);
        `
      case 'secondary':
        return css`
          background-color: var(--vantrip-secondary);
          color: var(--vantrip-color-white);
        `
      case 'cancel':
        return css`
          background-color: #bd5548;
          color: var(--vantrip-color-white);
        `
      case 'clear':
        return css`
          background-color: transparent;
          color: gray;
          font-weight: 400;
          &:hover {
            text-decoration: underline;
          }
        `
      default:
        return css`
          background-color: var(--vantrip-primary);
          color: var(--vantrip-color-white);
        `
    }
  }}

  &:hover {
    opacity: 0.9;
  }
`
