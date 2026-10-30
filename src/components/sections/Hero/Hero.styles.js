import styled from 'styled-components'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'

export const HeroSection = styled.section`
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
    url('/src/assets/images/hero-bg.jpg');

  flex: 1;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeroContainer = styled(FlexContainer)`
  flex: 1;
`
