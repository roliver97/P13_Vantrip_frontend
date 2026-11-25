import { useTranslation } from 'react-i18next'
import * as S from './CampersGrid.styles'
import { VanCardItem } from './VanCard/VanCard'
import { Spinner } from '../../../../components/ui/Spinner/Spinner'
import { ErrorModal } from '../../../../components/ui/ErrorModal/ErrorModal'

export const CampersGrid = ({ fetchData, filters, onClear, onRetryFetch }) => {
  const { t } = useTranslation()
  const { data, loading, error } = fetchData

  const campersList = data?.campers || []

  if (error)
    return (
      <ErrorModal
        message={`Error on fetch - ${error}`}
        onRetry={onRetryFetch}
      />
    )

  return (
    <S.GridSection id='campers'>
      {loading ? (
        <Spinner message={t('campersGrid.spinnerMsg')} />
      ) : campersList.length > 0 ? (
        <S.Grid>
          {campersList.map((van) => (
            <VanCardItem key={van._id} van={van} filters={filters} t={t} />
          ))}
        </S.Grid>
      ) : (
        <ErrorModal
          onRetry={onClear}
          buttonCTA={t('campersGrid.errorButtonCTA')}
        >
          <p>🔍 {t('campersGrid.errorMsg')}</p>
          <S.GridErrorSpan>{t('campersGrid.errorCTA')}</S.GridErrorSpan>
        </ErrorModal>
      )}
    </S.GridSection>
  )
}
