import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../../utils/scrollTo'
import { SearchContainer, SearchForm, SearchInput } from './Searchbox.styles'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const SearchBox = ({ onSearchSubmit, isSticky }) => {
  const { t } = useTranslation()
  const currentLocation = useLocation()

  const [localTerm, setLocalTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearchSubmit(localTerm)
    scrollToSection(e, currentLocation.pathname, 'campers')
  }

  return (
    <SearchContainer direction='row' $isSticky={isSticky}>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type='text'
          placeholder={t('searchBox.placeholder')}
          value={localTerm}
          onChange={(e) => {
            setLocalTerm(e.target.value)
          }}
        />
      </SearchForm>
    </SearchContainer>
  )
}
