import { useTranslation } from 'react-i18next'
import * as S from './CampersGrid.styles'
import { VanCardItem } from './VanCard/VanCard'
import { Spinner } from '../../../../components/ui/Spinner/Spinner'
import { Error } from '../../../../components/ui/Error/Error'

export const CampersGrid = ({ fetchData, filters, onClear }) => {
  const { t } = useTranslation()
  const { data, loading, error } = fetchData

  const campersList = data?.campers || []

  if (error)
    return <Error message={`Error on fetch - ${error}`} onRetry={onClear} />

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
        <Error onRetry={onClear} buttonCTA={t('campersGrid.errorButtonCTA')}>
          <p>🔍 {t('campersGrid.errorMsg')}</p>
          <S.GridErrorSpan>{t('campersGrid.errorCTA')}</S.GridErrorSpan>
        </Error>
      )}
    </S.GridSection>
  )
}
