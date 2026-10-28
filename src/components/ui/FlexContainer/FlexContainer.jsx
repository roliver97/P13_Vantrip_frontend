import { StyledDiv } from './FlexContainer.styles'

export const FlexContainer = ({ children, direction }) => {
  return <StyledDiv $direction={direction}>{children}</StyledDiv>
}
