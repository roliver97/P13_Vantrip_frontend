import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: var(--space-s) var(--space-m);
  border-radius: var(--radius-s);
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s ease;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  background-color: ${({ $variant }) =>
    $variant === 'primary' ? 'var(--vantrip-light)' : 'var(--vantrip-primary)'};

  color: ${({ $variant }) =>
    $variant === 'primary'
      ? 'var(--vantrip-primary)'
      : 'var(--vantrip-color-white)'};

  &:hover {
    opacity: 0.9;
  }
`
