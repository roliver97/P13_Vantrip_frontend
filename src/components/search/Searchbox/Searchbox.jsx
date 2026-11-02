import { SearchContainer, SearchInput } from './Searchbox.styles'

export const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <SearchContainer direction='row'>
      <SearchInput
        type='text'
        placeholder={`Busca per lloc o model de camper... 🔍`}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </SearchContainer>
  )
}
