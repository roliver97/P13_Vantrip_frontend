import {
  Grid,
  GridSection,
  VanCard,
  VanImg,
  VanInfo,
  PriceTag
} from './CampersGrid.styles'

const MOCK_VANS = [
  {
    id: 1,
    name: 'Explorer Van Pro',
    location: 'Girona Base',
    price: '85€ / nit',
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Nomad Classic',
    location: 'Barcelona Base',
    price: '70€ / nit',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Costa Brava Camper',
    location: 'Girona Base',
    price: '95€ / nit',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Pyrenees Escape',
    location: 'Lleida Base',
    price: '80€ / nit',
    image: ''
  },
  {
    id: 5,
    name: 'Explorer Van Pro',
    location: 'Girona Base',
    price: '85€ / nit',
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Nomad Classic',
    location: 'Barcelona Base',
    price: '70€ / nit',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    name: 'Costa Brava Camper',
    location: 'Girona Base',
    price: '95€ / nit',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    name: 'Pyrenees Escape',
    location: 'Lleida Base',
    price: '80€ / nit',
    image: ''
  },
  {
    id: 9,
    name: 'Explorer Van Pro',
    location: 'Girona Base',
    price: '85€ / nit',
    image:
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 10,
    name: 'Nomad Classic',
    location: 'Barcelona Base',
    price: '70€ / nit',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 11,
    name: 'Costa Brava Camper',
    location: 'Girona Base',
    price: '95€ / nit',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    name: 'Pyrenees Escape',
    location: 'Lleida Base',
    price: '80€ / nit',
    image: ''
  }
]

export const CampersGrid = ({ filters }) => {
  const { searchTerm } = filters
  const filteredVans = MOCK_VANS.filter((van) => {
    return (
      van.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      van.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const defaultImgErrorSrc = './src/assets/images/default_van_error_1.jpg'

  console.log(filteredVans)

  return (
    <GridSection id='campers'>
      <Grid>
        {filteredVans.length > 0 ? (
          filteredVans.map((van) => (
            <VanCard key={van.id} to={`/campers/${van.id}`}>
              <VanImg $image={van.image ? van.image : defaultImgErrorSrc} />
              <VanInfo>
                <h3>{van.name}</h3>
                <p>📍{van.location}</p>
                <PriceTag>{van.price}</PriceTag>
              </VanInfo>
            </VanCard>
          ))
        ) : (
          <p>No s'ha trobat cap camper amb aquest criteri.</p>
        )}
      </Grid>
    </GridSection>
  )
}
