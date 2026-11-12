import { useTranslation } from 'react-i18next'
import * as S from './CampersGrid.styles'
import { VanCardItem } from './VanCard/VanCard'
import { Spinner } from '../../../../components/ui/Spinner/Spinner'
import { Error } from '../../../../components/ui/Error/Error'

export const CampersGrid = ({ fetchData, filters, onResetSearch }) => {
  const { t } = useTranslation()
  const { data, loading, error } = fetchData

  const campersList = data?.campers || []
  const { searchTerm } = filters

  if (error)
    return (
      <Error message={`Error on fetch - ${error}`} onRetry={onResetSearch} />
    )

  const handleClearFiltersAndSubmit = (e) => {
    e.preventDefault()
    onResetSearch()
  }

  const filteredVans = campersList.filter((van) => {
    if (!searchTerm) return true //returns all vans
    const searchTermFormatted = searchTerm.toLowerCase().trim()
    const titleMatch = van.title
      ? van.title.toLowerCase().includes(searchTermFormatted)
      : false
    const brandMatch = van.brand
      ? van.brand.toLowerCase().includes(searchTermFormatted)
      : false
    const modelMatch = van.modelName
      ? van.modelName.toLowerCase().includes(searchTermFormatted)
      : false
    const locationVal = van.location || ''
    const locationMatch = locationVal
      .toLowerCase()
      .includes(searchTermFormatted)

    return titleMatch || brandMatch || modelMatch || locationMatch
  })

  return (
    <S.GridSection id='campers'>
      {loading ? (
        <Spinner message={t('campersGrid.spinnerMsg')} />
      ) : filteredVans.length > 0 ? (
        <S.Grid>
          {filteredVans.map((van) => (
            <VanCardItem key={van._id} van={van} filters={filters} t={t} />
          ))}
        </S.Grid>
      ) : (
        <Error
          onRetry={handleClearFiltersAndSubmit}
          buttonCTA={t('campersGrid.errorButtonCTA')}
        >
          <p>🔍 {t('campersGrid.errorMsg')}</p>
          <S.GridErrorSpan>{t('campersGrid.errorCTA')}</S.GridErrorSpan>
        </Error>
      )}
    </S.GridSection>
  )
}
