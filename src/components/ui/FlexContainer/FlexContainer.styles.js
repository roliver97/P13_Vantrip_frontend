import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'row' ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
`
