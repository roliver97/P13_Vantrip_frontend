import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;

  ${({ $bgColor }) => {
    switch ($bgColor) {
      case 'primary':
        return css`
          background-color: var(--vantrip-primary);
        `
      case 'secondary':
        return css`
          background-color: var(--vantrip-secondary);
        `
      default:
        return css`
          background-color: transparent;
        `
    }
  }}
`
