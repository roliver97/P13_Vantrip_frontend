import styled from 'styled-components'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'

export const HeroSection = styled.section`
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
    url('/src/assets/images/hero-bg.jpg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  min-height: calc(100svh - 62px);

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);
`

export const HeroContainer = styled(FlexContainer)`
  flex: 1;
  padding: var(--space-xl);

  h1 {
    transform: translateY(-40px);
  }
`
