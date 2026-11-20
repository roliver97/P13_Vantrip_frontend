import styled from 'styled-components'
import { FlexContainer } from '../FlexContainer/FlexContainer'
import { DefaultButton } from '../DefaultButton/DefaultButton'

export const CalendarContentWrapper = styled(FlexContainer)`
  flex-direction: column;
  gap: var(--space-m);
  flex: 1;

  .rdrCalendarWrapper {
    padding: var(--space-s);
    flex: 1;
    border-radius: var(--radius-m);
    min-height: 436px;
    width: 100%;
  }

  .rdrMonths {
    gap: var(--space-m);
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .rdrMonth {
    width: 100%;
    height: 100%;
  }
`

export const CalendarSubtitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
`

export const ClearButton = styled(DefaultButton)`
  padding: 1px;
  background-color: transparent;
  color: var(--vantrip-white);
  font-weight: 400;
  &:hover {
    text-decoration: none;
    font-weight: 600;
  }

  ${({ $variant }) => {
    if ($variant === 'modal')
      return `
    color: var(--vantrip-gray);

    &:hover {
    text-decoration: underline;
    font-weight: 400;
  }
`
  }}
`

export const ButtonsContainer = styled(FlexContainer)`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`
