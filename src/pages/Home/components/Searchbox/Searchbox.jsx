import * as S from './Searchbox.styles'
import { useTranslation } from 'react-i18next'

export const SearchBox = ({
  onSubmit,
  onClear,
  isSticky,
  onOpenCalendarModal,
  filters,
  setFilters
}) => {
  const { t } = useTranslation()

  return (
    <S.SearchContainer direction='row' $isSticky={isSticky}>
      <S.SearchForm onSubmit={onSubmit}>
        <S.TextInputWrapper>
          <S.TextInput
            type='text'
            placeholder={t('searchBox.placeholder')}
            value={filters.searchTerm}
            onChange={(e) => {
              const searchTermValue = e.target.value
              setFilters((prev) => {
                return { ...prev, searchTerm: searchTermValue }
              })
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSubmit(e)
              }
            }}
          />
          {filters.searchTerm && (
            <S.ClearButton
              variant='clear'
              type='button'
              onClick={(e) => {
                onClear(e, 'term')
              }}
            >
              X
            </S.ClearButton>
          )}
        </S.TextInputWrapper>

        <S.DateSplitWrapper>
          <S.DateButton type='button' onClick={onOpenCalendarModal}>
            {!filters.checkInFilter ? (
              <div>
                <p>📅 {t('searchBox.btnTitle')}</p>
              </div>
            ) : (
              <div>
                {t('searchBox.btnSpanFrom')}
                <span>{filters.checkInFilter.toLocaleDateString()}</span>
                {t('searchBox.btnSpanTo')}
                <span>{filters.checkOutFilter.toLocaleDateString()}</span>
                <S.ClearButton
                  variant='clear'
                  type='button'
                  onClick={(e) => {
                    onClear(e, 'dates')
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
