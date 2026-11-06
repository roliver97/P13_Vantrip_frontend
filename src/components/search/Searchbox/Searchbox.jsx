import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../../utils/scrollTo'
import * as S from './Searchbox.styles'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const SearchBox = ({
  onSearchSubmit,
  isSticky,
  onOpenCalendarModal,
  filters
}) => {
  const { t } = useTranslation()
  const currentLocation = useLocation()

  const [localTerm, setLocalTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    scrollToSection(e, currentLocation.pathname, 'campers')

    onSearchSubmit({
      searchTerm: localTerm,
      checkIn: filters.checkIn,
      checkOut: filters.checkOut
    })
  }

  const hasDatesSelected = filters.checkIn && filters.checkOut

  return (
    <S.SearchContainer direction='row' $isSticky={isSticky}>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.TextInput
          type='text'
          placeholder={t('searchBox.placeholder')}
          value={localTerm}
          onChange={(e) => {
            setLocalTerm(e.target.value)
          }}
        />

        <S.DateSplitWrapper>
          <S.DateButton type='button' onClick={onOpenCalendarModal}>
            {!hasDatesSelected ? (
              <div>
                <p>📅 {t('searchBox.btnTitle')}</p>
              </div>
            ) : (
              <div>
                {t('searchBox.btnSpanFrom')}
                <span>{filters.checkIn.toLocaleDateString()}</span>
                {t('searchBox.btnSpanTo')}
                <span>{filters.checkOut.toLocaleDateString()}</span>
              </div>
            )}
          </S.DateButton>
        </S.DateSplitWrapper>

        <S.SubmitButton fullWidth={true} type='submit'>
          {t('searchBox.submitBtn')}
        </S.SubmitButton>
      </S.SearchForm>
    </S.SearchContainer>
  )
}
