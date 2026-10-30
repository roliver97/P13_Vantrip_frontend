import styled from 'styled-components'

export const SpanStyled = styled.span`
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
`
