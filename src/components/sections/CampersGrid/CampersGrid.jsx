import { useTranslation } from 'react-i18next'
import {
  Grid,
  GridSection,
  VanCard,
  VanImg,
  VanInfo,
  PriceTag,
  AvailabilityTag
} from './CampersGrid.styles'

const MOCK_VANS = [
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
]

export const CampersGrid = ({ filters }) => {
  const { t } = useTranslation()
  const { searchTerm, checkIn, checkOut } = filters

  const filteredVans = MOCK_VANS.filter((van) => {
    if (!searchTerm && (!checkIn || !checkOut)) return true //return all campers

    const byNameOrLocation =
      van.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      van.location.toLowerCase().includes(searchTerm.toLowerCase())

    if (searchTerm && (!checkIn || !checkOut)) return byNameOrLocation

    const startSearchDate = new Date(checkIn)
    const endSearchDate = new Date(checkOut)

    const isBookedOverlap = van.bookedDates.some((booking) => {
      const bookedStart = new Date(booking.from)
      const bookedEnd = new Date(booking.to)

      return startSearchDate < bookedEnd && endSearchDate > bookedStart
    })

    if (!searchTerm && checkIn && checkOut) return !isBookedOverlap

    if (searchTerm && checkIn && checkOut)
      return byNameOrLocation && !isBookedOverlap
  })

  const defaultImgErrorSrc = './src/assets/images/default_van_error_1.jpg'

  console.log(filteredVans)

  return (
    <GridSection id='campers'>
      <Grid>
        {filteredVans.length > 0 ? (
          filteredVans.map((van) => {
            const hasActiveDatesFilter = checkIn && checkOut

            return (
              <VanCard key={van.id} to={`/campers/${van.id}`}>
                <VanImg $image={van.image ? van.image : defaultImgErrorSrc} />
                <VanInfo>
                  <h3>{van.name}</h3>
                  <p>📍{van.location}</p>
                  <PriceTag>{van.price}</PriceTag>
                  {hasActiveDatesFilter && (
                    <AvailabilityTag>
                      {t('campersGrid.availabilityMsg')}
                    </AvailabilityTag>
                  )}
                </VanInfo>
              </VanCard>
            )
          })
        ) : (
          <p>{t('campersGrid.errorMsg')}</p>
        )}
      </Grid>
    </GridSection>
  )
}
