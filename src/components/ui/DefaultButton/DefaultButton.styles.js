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
          color: var(--vantrip-white);
        `
      case 'cancel':
        return css`
          background-color: #bd5548;
          color: var(--vantrip-white);
        `

      case 'slider':
        return css`
          padding: 5px 10px;
          font-weight: 600;
          border-radius: var(--radius-l);
          background-color: rgba(255, 255, 255, 0.4);
          &:hover {
            background-color: rgba(255, 255, 255, 0.8);
          }
        `
      case 'navStep':
        return css`
          color: var(--vantrip-lighter);
          padding: 5px 15px;
          font-weight: 400;
          border-radius: var(--radius-l);
          background-color: transparent;
        `
      default:
        return css`
          background-color: var(--vantrip-primary);
          color: var(--vantrip-white);
        `
    }
  }}

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: var(--vantrip-gray, #ccc);
    cursor: not-allowed;
    opacity: 0.9;
  }
`
