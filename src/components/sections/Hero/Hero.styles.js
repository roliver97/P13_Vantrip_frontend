import styled from 'styled-components'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'
import { device } from '../../../styles/breakpoints'

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

  min-height: calc(100svh - 72px);

  ${device.tablet} {
    min-height: calc(100svh - 62px);
  }
`

export const HeroContainer = styled(FlexContainer)`
  flex: 1;
  padding: var(--space-xl);
`
