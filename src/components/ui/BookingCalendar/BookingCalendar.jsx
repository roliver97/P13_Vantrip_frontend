import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import * as S from './BookingCalendar.styles'
import { DateRange } from 'react-date-range'
import { DefaultButton } from '../DefaultButton/DefaultButton'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export const BookingCalendar = ({
  initialDates,
  onConfirm,
  onClose,
  variant
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

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440) //1440px === desktop

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1440) //1440px === desktop
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { t } = useTranslation()

  const handleSelection = (ranges) => {
    const { startDate, endDate } = ranges.selection
    setSelectionRange(ranges.selection)
    if (variant !== 'modal' && onConfirm) {
      onConfirm(startDate, endDate)
    }
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

    onConfirm?.(null, null)
    onClose?.()
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
        months={variant !== 'modal' && 2}
        direction={isDesktop ? 'horizontal' : 'vertical'}
        minDate={new Date()}
        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      />
      <S.ClearButton
        type='button'
        variant='clear'
        $variant={variant === 'modal' && 'modal'}
        onClick={(e) => handleClear(e)}
      >
        {t('calendarModal.clearBtn')}
      </S.ClearButton>

      {variant === 'modal' && (
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
