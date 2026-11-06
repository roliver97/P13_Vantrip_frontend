import styled from 'styled-components'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'

export const CalendarContentWrapper = styled(FlexContainer)`
  flex-direction: column;
  gap: var(--space-m);
`

export const CalendarSubtitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
`

export const ButtonsContainer = styled(FlexContainer)`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`
