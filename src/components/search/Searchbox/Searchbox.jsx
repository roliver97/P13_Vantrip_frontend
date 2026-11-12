import { useLocation } from 'react-router-dom'
import { handleScrollToSection } from '../../../utils/scrollTo'
import * as S from './Searchbox.styles'
import { useTranslation } from 'react-i18next'

export const SearchBox = ({
  onSearchSubmit,
  isSticky,
  onOpenCalendarModal,
  tempFilters,
  setTempFilters,
  onClearFilters
}) => {
  const { t } = useTranslation()
  const currentLocation = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    handleScrollToSection(e, currentLocation.pathname, 'campers')

    onSearchSubmit({
      searchTerm: tempFilters.searchTerm,
      checkInFilter: tempFilters.checkIn,
      checkOutFilter: tempFilters.checkOut
    })
  }

  const handleClear = (inputType) => {
    if (inputType === 'term') {
      onClearFilters('term')
    } else if (inputType === 'dates') {
      onClearFilters('dates')
    } else {
      onClearFilters()
    }
  }

  return (
    <S.SearchContainer direction='row' $isSticky={isSticky}>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.TextInputWrapper>
          <S.TextInput
            type='text'
            placeholder={t('searchBox.placeholder')}
            value={tempFilters.searchTerm}
            onChange={(e) => {
              const searchTermValue = e.target.value
              setTempFilters((prev) => {
                return { ...prev, searchTerm: searchTermValue }
              })
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e)
              }
            }}
          />
          {tempFilters.searchTerm && (
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
            {!tempFilters.checkIn ? (
              <div>
                <p>📅 {t('searchBox.btnTitle')}</p>
              </div>
            ) : (
              <div>
                {t('searchBox.btnSpanFrom')}
                <span>{tempFilters.checkIn.toLocaleDateString()}</span>
                {t('searchBox.btnSpanTo')}
                <span>{tempFilters.checkOut.toLocaleDateString()}</span>
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
