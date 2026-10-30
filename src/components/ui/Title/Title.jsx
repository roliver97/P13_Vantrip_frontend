import * as S from './Title.styles'

export const TitleComponent = ({ variant, fontSize, children }) => {
  return (
    <S.TitleStyled $variant={variant} $fontSize={fontSize}>
      {children}
    </S.TitleStyled>
  )
}
