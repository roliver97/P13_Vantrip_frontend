import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../../utils/scrollTo'
import * as S from './Searchbox.styles'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const SearchBox = ({
  onSearchSubmit,
  isSticky,
  onOpenCalendarModal
}) => {
  const { t } = useTranslation()
  const currentLocation = useLocation()

  const [localTerm, setLocalTerm] = useState('')

  const [dateRange, setDateRange] = useState({
    startDate: new Date(2025, 9, 22),
    endDate: new Date(2025, 10, 22)
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    scrollToSection(e, currentLocation.pathname, 'campers')

    onSearchSubmit({
      searchTerm: localTerm,
      checkIn: dateRange.startDate,
      checkOut: dateRange.endDate
    })
  }

  const hasDatesSelected = dateRange.startDate && dateRange.endDate

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
              <div>📅 {t('searchBox.btnTitle')}</div>
            ) : (
              <div>
                {t('searchBox.btnSpanFrom')}
                <span>{dateRange.startDate.toLocaleDateString()}</span>
                {t('searchBox.btnSpanTo')}
                <span>{dateRange.endDate.toLocaleDateString()}</span>
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
