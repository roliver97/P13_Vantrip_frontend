import { useTranslation } from 'react-i18next'
import { BaseModal } from '../../ui/BaseModal/BaseModal'
import { useState } from 'react'
import * as S from './CalendarModal.styles'
import { DateRange } from 'react-date-range'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export const CalendarModal = ({ isOpen, onClose, onDatesSelection }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })
  const { t } = useTranslation()

  if (!isOpen) return null

  const handleSelection = (ranges) => {
    setSelectionRange(ranges.selection)
  }

  const handleConfirm = () => {
    onDatesSelection(selectionRange.startDate, selectionRange.endDate)
  }

  const handleClear = () => {
    const today = new Date()
    setSelectionRange({
      startDate: today,
      endDate: today,
      key: 'selection'
    })
    onDatesSelection(null, null)
    onClose()
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={t('calendarModal.title')}
      zIndexOverlay={1000}
    >
      <S.CalendarContentWrapper>
        <S.CalendarSubtitle>{t('calendarModal.subtitle')}</S.CalendarSubtitle>

        <DateRange
          editableDateInputs={true}
          onChange={handleSelection}
          moveRangeOnFirstSelection={false}
          ranges={[selectionRange]}
          rangeColors={['#2b4c3f']}
          minDate={new Date()}
          maxDate={
            new Date(new Date().setFullYear(new Date().getFullYear() + 1))
          }
        />
        <DefaultButton type='button' variant='clear' onClick={handleClear}>
          {t('calendarModal.clearBtn')}
        </DefaultButton>

        <S.ButtonsContainer>
          <DefaultButton type='button' variant='cancel' onClick={onClose}>
            {t('calendarModal.cancelBtn')}
          </DefaultButton>
          <DefaultButton type='button' onClick={handleConfirm}>
            {t('calendarModal.applyBtn')}
          </DefaultButton>
        </S.ButtonsContainer>
      </S.CalendarContentWrapper>
    </BaseModal>
  )
}
