import * as S from './Span.styles'

export const SpanComponent = ({ variant, fontSize, children }) => {
  return (
    <S.SpanStyled $variant={variant} $fontSize={fontSize}>
      {children}
    </S.SpanStyled>
  )
}
