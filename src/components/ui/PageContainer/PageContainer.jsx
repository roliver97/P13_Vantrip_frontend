import * as S from './PageContainer.styles'

export const PageContainer = ({ children, className }) => {
  return (
    <S.PageContainer className={className}>
      {/*className is required so styled-components can blend the styles of this generic styled component with the styles of the specific component into which we inject it*/}
      {children}
    </S.PageContainer>
  )
}
