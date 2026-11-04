import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../../utils/scrollTo'
import * as S from './Searchbox.styles'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const SearchBox = ({ onSearchSubmit, isSticky }) => {
  const { t } = useTranslation()
  const currentLocation = useLocation()

  const [localTerm, setLocalTerm] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    scrollToSection(e, currentLocation.pathname, 'campers')

    onSearchSubmit({
      searchTerm: localTerm,
      checkIn,
      checkOut
    })
  }

  return (
    <S.SearchContainer direction='row' $isSticky={isSticky}>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInputsWrapper>
          <S.TextInput
            type='text'
            placeholder={t('searchBox.placeholder')}
            value={localTerm}
            onChange={(e) => {
              setLocalTerm(e.target.value)
            }}
          />

          <S.CheckInInput
            type='date'
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value)
            }}
          />
          <S.CheckOutInput
            type='date'
            value={checkOut}
            onChange={(e) => {
              setCheckOut(e.target.value)
            }}
          />
        </S.SearchInputsWrapper>

        <S.SubmitButton fullWidth={true} type='submit'>
          Buscar
        </S.SubmitButton>
      </S.SearchForm>
    </S.SearchContainer>
  )
}
