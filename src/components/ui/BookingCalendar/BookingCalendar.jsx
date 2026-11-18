import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import * as S from './BookingCalendar.styles'
import { DateRange } from 'react-date-range'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export const BookingCalendar = ({
  initialDates,
  onConfirm,
  showActions = true,
  onClose
}) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: initialDates?.startDate
      ? new Date(initialDates.startDate)
      : new Date(),
    endDate: initialDates?.endDate
      ? new Date(initialDates.endDate)
      : new Date(),
    key: 'selection'
  })

  const { t } = useTranslation()

  const handleSelection = (ranges) => {
    setSelectionRange(ranges.selection)
  }

  const handleConfirm = () => {
    const { startDate, endDate } = selectionRange
    onConfirm(startDate, endDate)
    onClose()
  }

  const handleClear = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const today = new Date()
    setSelectionRange({
      startDate: today,
      endDate: today,
      key: 'selection'
    })

    onConfirm(null, null)
    onClose()
  }

  return (
    <S.CalendarContentWrapper>
      <S.CalendarSubtitle>{t('calendarModal.subtitle')}</S.CalendarSubtitle>

      <DateRange
        editableDateInputs={true}
        onChange={handleSelection}
        moveRangeOnFirstSelection={false}
        ranges={[selectionRange]}
        rangeColors={['#2b4c3f']}
        months={2}
        direction='horizontal'
        minDate={new Date()}
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      />
      <DefaultButton
        type='button'
        variant='clear'
        onClick={(e) => handleClear(e)}
      >
        {t('calendarModal.clearBtn')}
      </DefaultButton>

      {showActions && onClose && (
        <S.ButtonsContainer>
          <DefaultButton type='button' variant='cancel' onClick={onClose}>
            {t('calendarModal.cancelBtn')}
          </DefaultButton>
          <DefaultButton type='button' onClick={handleConfirm}>
            {t('calendarModal.applyBtn')}
          </DefaultButton>
        </S.ButtonsContainer>
      )}
    </S.CalendarContentWrapper>
  )
}
