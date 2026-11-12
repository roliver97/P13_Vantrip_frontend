import { useTranslation } from 'react-i18next'
import * as S from './CampersGrid.styles'
import { useFetch } from '../../../../hooks/useFetch'
import { getCampers } from '../../../../services/campersService'
import { VanCardItem } from './VanCard/VanCard'
import { useCallback, useState } from 'react'
import { Spinner } from '../../../../components/ui/Spinner/Spinner'
import { Error } from '../../../../components/ui/Error/Error'

export const CampersGrid = ({ filters, onResetSearch }) => {
  const { t } = useTranslation()
  const [retryCounter, setRetryCounter] = useState(0)

  const fetchCampersMemoized = useCallback(() => {
    return getCampers(filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, retryCounter])

  const { data, loading, error } = useFetch(fetchCampersMemoized)

  const campersList = data?.campers || []
  const { searchTerm } = filters

  const handleRetryFetch = () => {
    setRetryCounter((prev) => prev + 1)
  }

  if (error)
    return (
      <Error message={`Error on fetch - ${error}`} onRetry={handleRetryFetch} />
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
