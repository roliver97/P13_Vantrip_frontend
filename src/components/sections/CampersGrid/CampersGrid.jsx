import { useTranslation } from 'react-i18next'
import { Grid, GridSection } from './CampersGrid.styles'
import { useFetch } from '../../../hooks/useFetch'
import { getCampers } from '../../../services/campersService'
import { VanCardItem } from './VanCard/VanCard'

/* const MOCK_VANS = [
  {
    id: 1,
    name: 'Explorer Van Pro',
    location: 'Girona Base',
    price: '85€ / nit',
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80',
    bookedDates: [
      { from: '2026-11-10', to: '2026-11-15' },
      { from: '2026-12-01', to: '2026-12-10' }
    ]
  },
  {
    id: 2,
    name: 'Nomad Classic',
    location: 'Barcelona Base',
    price: '70€ / nit',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80',
    bookedDates: [{ from: '2026-11-20', to: '2026-11-25' }]
  },
  {
    id: 3,
    name: 'Costa Brava Camper',
    location: 'Girona Base',
    price: '95€ / nit',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    bookedDates: []
  },
  {
    id: 4,
    name: 'Pyrenees Escape',
    location: 'Lleida Base',
    price: '80€ / nit',
    image: '',
    bookedDates: [{ from: '2026-11-05', to: '2026-11-12' }]
  },
  {
    id: 5,
    name: 'Explorer Van Pro',
    location: 'Girona Base',
    price: '85€ / nit',
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80',
    bookedDates: []
  },
  {
    id: 6,
    name: 'Nomad Classic',
    location: 'Barcelona Base',
    price: '70€ / nit',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80',
    bookedDates: [{ from: '2026-11-15', to: '2026-11-18' }]
  },
  {
    id: 7,
    name: 'Costa Brava Camper',
    location: 'Girona Base',
    price: '95€ / nit',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    bookedDates: []
  },
  {
    id: 8,
    name: 'Pyrenees Escape',
    location: 'Lleida Base',
    price: '80€ / nit',
    image: '',
    bookedDates: [{ from: '2026-12-01', to: '2026-12-05' }]
  },
  {
    id: 9,
    name: 'Explorer Van Pro',
    location: 'Girona Base',
    price: '85€ / nit',
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80',
    bookedDates: []
  },
  {
    id: 10,
    name: 'Nomad Classic',
    location: 'Barcelona Base',
    price: '70€ / nit',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80',
    bookedDates: [{ from: '2026-11-10', to: '2026-11-20' }]
  },
  {
    id: 11,
    name: 'Costa Brava Camper',
    location: 'Girona Base',
    price: '95€ / nit',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    bookedDates: []
  },
  {
    id: 12,
    name: 'Pyrenees Escape',
    location: 'Lleida Base',
    price: '80€ / nit',
    image: '',
    bookedDates: []
  }
] */

export const CampersGrid = ({ filters }) => {
  const { data, loading, error } = useFetch(getCampers)
  const { t } = useTranslation()
  const { searchTerm, checkInFilter, checkOutFilter } = filters
  const campersList = data?.campers || []

  if (loading) return <p>Carregant furgonetes... 🚐💨</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  const filteredVans = campersList.filter((van) => {
    if (!searchTerm && (!checkInFilter || !checkOutFilter)) return true //return all campers

    const searchTermLower = searchTerm ? searchTerm.toLowerCase().trim() : ''

    const titleMatch = van.title
      ? van.title.toLowerCase().includes(searchTermLower)
      : false
    const brandMatch = van.brand
      ? van.brand.toLowerCase().includes(searchTermLower)
      : false
    const modelMatch = van.modelName
      ? van.modelName.toLowerCase().includes(searchTermLower)
      : false

    const locationVal = van.location || ''
    const locationMatch = locationVal.toLowerCase().includes(searchTermLower)

    const byNameOrLocation =
      titleMatch || brandMatch || modelMatch || locationMatch

    if (searchTerm && (!checkInFilter || !checkOutFilter))
      return byNameOrLocation

    const startSearchDate = new Date(checkInFilter)
    const endSearchDate = new Date(checkOutFilter)

    const isBookedOverlap = van.bookedDates.some((booking) => {
      const bookedStart = new Date(booking.from)
      const bookedEnd = new Date(booking.to)

      return startSearchDate < bookedEnd && endSearchDate > bookedStart
    })

    if (!searchTerm && checkInFilter && checkOutFilter) return !isBookedOverlap

    if (searchTerm && checkInFilter && checkOutFilter)
      return byNameOrLocation && !isBookedOverlap
  })

  console.log(filteredVans)

  return (
    <GridSection id='campers'>
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
    </GridSection>
  )
}
