import { StyledDiv } from './FlexContainer.styles'

export const FlexContainer = ({ children, direction, className }) => {
  return (
    <StyledDiv $direction={direction} className={className}>
      {/*className is required so styled-components can blend the styles of this generic styled component with the styles of the specific component into which we inject it*/}
      {children}
    </StyledDiv>
  )
}
