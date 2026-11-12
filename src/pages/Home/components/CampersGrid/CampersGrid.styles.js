import styled, { keyframes } from 'styled-components'

export const GridSection = styled.section`
  background: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: var(--space-xxl);
  min-height: calc(100svh - 62px);
  scroll-margin-top: 62px;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Grid = styled.div`
  display: grid;
  padding: var(--space-m);
  grid-template-columns: repeat(auto-fit, 300px);

  gap: var(--space-l);
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  justify-content: center;

  animation: ${fadeIn} 0.4s ease-out forwards;
`

export const GridErrorSpan = styled.span`
  font-weight: 600;
`
