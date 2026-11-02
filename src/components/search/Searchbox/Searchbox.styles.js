import styled from 'styled-components'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'
import { device } from '../../../styles/breakpoints'

export const SearchContainer = styled(FlexContainer)`
  width: 100%;
  padding: var(--space-s) 0;

  position: sticky;
  top: 56px;
  z-index: 100;

  ${device.tablet} {
    top: 46px;
    padding: var(--space-s) var(--space-m);
  }
`

export const SearchInput = styled.input`
  height: 40px;
  border-radius: var(--radius-l);
  flex: 1;
  border: none;
  outline: none;
  text-align: center;
  border: 2px solid var(--vantrip-secondary);

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);

  &:focus {
    border: 3px solid var(--vantrip-secondary);
  }
`
