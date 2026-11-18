import { useLocation } from 'react-router-dom'
import { BookingCalendar } from '../../../../../components/ui/BookingCalendar/BookingCalendar'
import * as S from './CalendarStep.styles'
import { useState } from 'react'
import { DefaultButton } from '../../../../../components/ui/DefaultButton/DefaultButton'
import { useTranslation } from 'react-i18next'

export const CalendarStep = ({
  currentBookingData,
  onUpdateData,
  onNext,
  maxStepReached
}) => {
  const { t } = useTranslation()
  const location = useLocation()
  const activeFilters = location.state?.filters || null
  const [bookingDates, setBookingDates] = useState({
    startDate:
      currentBookingData?.startDate ||
      (activeFilters?.checkInFilter
        ? new Date(activeFilters.checkInFilter)
        : null),
    endDate:
      currentBookingData?.endDate ||
      (activeFilters?.checkOutFilter
        ? new Date(activeFilters.checkOutFilter)
        : null)
  })

  const handleDateConfirm = (startDate, endDate) => {
    setBookingDates({ startDate, endDate })
  }

  const handleUpdateData = () => {
    if (!isValidRange) return
    onUpdateData(bookingDates)
    onNext()
  }

  const isValidRange =
    bookingDates.startDate &&
    bookingDates.endDate &&
    bookingDates.startDate.getTime() !== bookingDates.endDate.getTime()

  const isSameRange =
    bookingDates.startDate === currentBookingData?.startDate &&
    bookingDates.endDate === currentBookingData?.endDate

  return (
    <S.CalendarStepContainer>
      <BookingCalendar
        onConfirm={handleDateConfirm}
        initialDates={bookingDates}
      ></BookingCalendar>

      <DefaultButton
        type='button'
        onClick={handleUpdateData}
        disabled={!isValidRange}
      >
        {!isValidRange
          ? t('bookingBox.calendarStep.chooseBtn')
          : maxStepReached === 1
            ? t('bookingBox.calendarStep.applyBtn')
            : isSameRange
              ? t('bookingBox.calendarStep.nextBtn')
              : t('bookingBox.calendarStep.changesBtn')}
      </DefaultButton>
    </S.CalendarStepContainer>
  )
}
