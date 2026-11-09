import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  gap: var(--space-m);
`

export const SpinnerLoader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--vantrip-light, #f3f3f3);
  border-top: 4px solid var(--vantrip-primary, #ff5a5f);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

export const SpinnerLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vantrip-light);
`
