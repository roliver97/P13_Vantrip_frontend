import { useTranslation } from 'react-i18next'
import { Grid, GridSection } from './CampersGrid.styles'
import { useFetch } from '../../../hooks/useFetch'
import { getCampers } from '../../../services/campersService'
import { VanCardItem } from '../../cards/VanCard/VanCard'
import { useCallback } from 'react'
import { Spinner } from '../../ui/Spinner/Spinner'

export const CampersGrid = ({ filters }) => {
  const { t } = useTranslation()
  const fetchCampersMemoized = useCallback(() => {
    return getCampers(filters)
  }, [filters])
  const { data, loading, error } = useFetch(fetchCampersMemoized)
  const campersList = data?.campers || []
  const { searchTerm, checkInFilter, checkOutFilter } = filters

  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

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
    <GridSection id='campers'>
      {loading ? (
        <Spinner message={t('campersGrid.spinnerMsg')} />
      ) : (
        <Grid>
          {filteredVans.length > 0 ? (
            filteredVans.map((van) => (
              <VanCardItem
                key={van._id}
                van={van}
                checkInFilter={checkInFilter}
                checkOutFilter={checkOutFilter}
                t={t}
              />
            ))
          ) : (
            <p>{t('campersGrid.errorMsg')}</p>
          )}
        </Grid>
      )}
    </GridSection>
  )
}
