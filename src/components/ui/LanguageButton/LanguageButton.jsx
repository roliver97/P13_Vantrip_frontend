import * as S from './LanguageButton.styles'

export const LanguageButton = ({
  onClick,
  currentLang = 'ES',
  currentCurrency = 'EUR'
}) => {
  return (
    <S.StyledButton onClick={onClick}>
      <span>🌐</span>
      <span>
        {currentLang} | {currentCurrency}
      </span>
    </S.StyledButton>
  )
}
