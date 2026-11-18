import * as S from './DefaultButton.styles'

export const DefaultButton = ({
  variant,
  fullWidth = false,
  children,
  ...restProps //restProps === onClick, disabled, type, className, etc. It serves to encompass ALL props that are not related to Styled Components (i.e., those that represent logic) and ensures that none are overlooked.
}) => {
  return (
    <S.StyledButton $variant={variant} $fullWidth={fullWidth} {...restProps}>
      {children}
    </S.StyledButton>
  )
}
