import styled from 'styled-components'

export const TitleStyled = styled.h1`
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return 'var(--vantrip-primary)'
      case 'secondary':
        return 'var(--vantrip-secondary)'
      case 'light':
        return 'var(--vantrip-light)'
      case 'lighter':
        return 'var(--vantrip-lighter)'
      case 'dark':
        return 'var(--vantrip-dark)'
      case 'darker':
        return 'var(--vantrip-darker)'
      default:
        return 'var(--vantrip-color-white)'
    }
  }};

  font-size: ${({ $fontSize }) => $fontSize || undefined};
` // In index.css, we’ve already set the h1 elements to 2.2rem. That's why we put undefined here if no prop is received.
