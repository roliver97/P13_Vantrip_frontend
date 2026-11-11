import { useTranslation } from 'react-i18next'
import * as S from './Error.styles'
import { Spinner } from '../Spinner/Spinner'

export const Error = ({
  children,
  showSpinner = false,
  onRetry,
  buttonCTA
}) => {
  const { t } = useTranslation()
  const defaultMessage = t('error.defaultMsg')

  return (
    <S.ErrorWrapper>
      <S.ErrorContent>
        {children ? children : <p>{defaultMessage}</p>}
      </S.ErrorContent>
      {showSpinner ? (
        <Spinner message={''} />
      ) : (
        <S.ErrorButton variant={'cancel'} onClick={onRetry}>
          {buttonCTA ? buttonCTA : t('error.CTA')}
        </S.ErrorButton>
      )}
    </S.ErrorWrapper>
  )
}
