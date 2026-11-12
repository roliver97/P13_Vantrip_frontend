import { useLocation } from 'react-router-dom'
import { handleScrollToSection } from '../../../../utils/scrollTo'
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
  const [localFilters, setLocalFilters] = useState({
    searchTerm: '',
    checkIn: null,
    checkOut: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleScrollToSection(e, currentLocation.pathname, 'campers')

    onSearchSubmit({
      searchTerm: localFilters.searchTerm,
      checkInFilter: localFilters.checkIn,
      checkOutFilter: localFilters.checkOut
    })
  }

  const handleClear = (inputType) => {
    if (inputType === 'term') {
      setLocalFilters((prev) => ({ ...prev, searchTerm: '' }))
    } else if (inputType === 'dates') {
      setLocalFilters((prev) => ({ ...prev, checkIn: null, checkOut: null }))
    }
  }

  return (
    <S.SearchContainer direction='row' $isSticky={isSticky}>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.TextInputWrapper>
          <S.TextInput
            type='text'
            placeholder={t('searchBox.placeholder')}
            value={localFilters.searchTerm}
            onChange={(e) => {
              const searchTermValue = e.target.value
              setLocalFilters((prev) => {
                return { ...prev, searchTerm: searchTermValue }
              })
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e)
              }
            }}
          />
          {localFilters.searchTerm && (
            <S.ClearButton
              variant='clear'
              type='button'
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClear('term')
              }}
            >
              X
            </S.ClearButton>
          )}
        </S.TextInputWrapper>

        <S.DateSplitWrapper>
          <S.DateButton type='button' onClick={onOpenCalendarModal}>
            {!localFilters.checkIn ? (
              <div>
                <p>📅 {t('searchBox.btnTitle')}</p>
              </div>
            ) : (
              <div>
                {t('searchBox.btnSpanFrom')}
                <span>{localFilters.checkIn.toLocaleDateString()}</span>
                {t('searchBox.btnSpanTo')}
                <span>{localFilters.checkOut.toLocaleDateString()}</span>
                <S.ClearButton
                  variant='clear'
                  type='button'
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleClear('dates')
                  }}
                >
                  X
                </S.ClearButton>
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
