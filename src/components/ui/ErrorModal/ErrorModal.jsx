import { useTranslation } from 'react-i18next'
import * as S from './ErrorModal.styles'

export const ErrorModal = ({
  message,
  retry = true,
  onRetry,
  buttonCTAText,
  className
}) => {
  const { t } = useTranslation()
  const defaultMessage = t('error.defaultMsg')

  return (
    <S.ErrorWrapper className={className}>
      <S.ErrorContent>
        <p>{message ? message : defaultMessage}</p>
      </S.ErrorContent>

      {retry && (
        <S.ErrorButton variant={'cancel'} onClick={onRetry}>
          {buttonCTAText ? buttonCTAText : t('error.CTA')}
        </S.ErrorButton>
      )}
    </S.ErrorWrapper>
  )
}
