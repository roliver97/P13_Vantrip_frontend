import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../../utils/scrollTo'
import { SearchContainer, SearchInput } from './Searchbox.styles'

export const SearchBox = ({ searchTerm, onSearchChange, isSticky }) => {
  const currentLocation = useLocation()
  return (
    <SearchContainer direction='row' $isSticky={isSticky}>
      <SearchInput
        type='text'
        placeholder={`Busca per lloc o model de camper... 🔍`}
        value={searchTerm}
        onChange={(e) => {
          onSearchChange(e.target.value)
          scrollToSection(e, currentLocation.pathname, 'campers')
        }}
      />
    </SearchContainer>
  )
}
