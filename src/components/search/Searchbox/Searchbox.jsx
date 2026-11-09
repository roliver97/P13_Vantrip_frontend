import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../../utils/scrollTo'
import * as S from './Searchbox.styles'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const SearchBox = ({
  onSearchSubmit,
  isSticky,
  onOpenCalendarModal,
  tempFilters,
  onClearFilters
}) => {
  const { t } = useTranslation()
  const currentLocation = useLocation()

  const [localTerm, setLocalTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    scrollToSection(e, currentLocation.pathname, 'campers')

    onSearchSubmit({
      searchTerm: localTerm,
      checkIn: tempFilters.checkIn,
      checkOut: tempFilters.checkOut
    })
  }

  const handleClear = (inputType) => {
    if (inputType === 'term') {
      setLocalTerm('')
      onClearFilters('term')
    } else if (inputType === 'dates') {
      onClearFilters('dates')
    } else {
      setLocalTerm('')
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
            value={localTerm}
            onChange={(e) => {
              setLocalTerm(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e)
              }
            }}
          />
          {localTerm !== '' && (
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
