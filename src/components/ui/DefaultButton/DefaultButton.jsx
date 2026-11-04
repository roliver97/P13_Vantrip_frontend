import * as S from './DefaultButton.styles'

export const DefaultButton = ({
  variant,
  fullWidth = false,
  onClick,
  className,
  children
}) => {
  return (
    <S.StyledButton
      onClick={onClick}
      $variant={variant}
      $fullWidth={fullWidth}
      className={className}
    >
      {children}
    </S.StyledButton>
  )
}
