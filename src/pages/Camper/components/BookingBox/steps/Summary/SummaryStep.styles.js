import styled from 'styled-components'
import { FlexContainer } from '../../../../../../components/ui/FlexContainer/FlexContainer'

export const SummaryWrapper = styled(FlexContainer)`
  background-color: var(--vantrip-primary);
  flex: 1;
  border-radius: var(--radius-m);
  overflow: hidden;

  div {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: var(--space-s);
    padding: var(--space-m);
    border-bottom: 1px solid var(--vantrip-white);
  }

  div:first-child {
    border-bottom: 3px solid var(--vantrip-white);
  }

  div:last-child {
    border-bottom: none;
    background-color: var(--vantrip-dark);
    font-size: 1.3rem;
  }
`

export const CamperTitle = styled.h4``

export const DetailsField = styled(FlexContainer)`
  flex: 1;

  p {
    display: flex;
    width: 100%;

    span {
      flex: 1;
      text-align: start;
    }
  }
`
