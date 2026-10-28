import * as S from './DefaultButton.styles'

export const DefaultButton = ({
  variant,
  fullWidth = false,
  onClick,
  children
}) => {
  return (
    <S.StyledButton onClick={onClick} $variant={variant} $fullWidth={fullWidth}>
      {children}
    </S.StyledButton>
  )
}
