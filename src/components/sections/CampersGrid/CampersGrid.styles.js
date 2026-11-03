import styled from 'styled-components'
import { device } from '../../../styles/breakpoints'
import { Link } from 'react-router-dom'

export const GridSection = styled.section`
  background: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: var(--space-xl);
  min-height: calc(100svh - 62px);
  scroll-margin-top: 62px;
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
`

export const VanCard = styled(Link)`
  background: var(--vantrip-secondary, #ffffff);
  border-radius: var(--radius-m);
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
` // Link is a special react-router-dom component

export const VanImg = styled.div`
  height: 200px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  border-radius: var(--radius-m) var(--radius-m) 0 0;
`

export const VanInfo = styled.div`
  padding: var(--space-m);
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
`

export const PriceTag = styled.span`
  color: var(--vantrip-color-secondary);
  font-weight: 600;
  background-color: var(--vantrip-color-secondary);

  ${device.desktop} {
    font-size: 1.1rem;
  }
`
