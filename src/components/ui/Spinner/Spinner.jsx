import { useTranslation } from 'react-i18next'
import * as S from './Spinner.styles'

export const Spinner = ({ message }) => {
  const { t } = useTranslation()
  const displayMessage = message || t('spinner.defaultMsg')

  return (
    <S.SpinnerWrapper>
      <S.SpinnerLoader />
      <S.SpinnerLabel>{displayMessage}</S.SpinnerLabel>
    </S.SpinnerWrapper>
  )
}
