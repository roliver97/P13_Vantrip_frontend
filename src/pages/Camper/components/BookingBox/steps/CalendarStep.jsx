import { useLocation } from 'react-router-dom'
import { BookingCalendar } from '../../../../../components/ui/BookingCalendar/BookingCalendar'
import * as S from './CalendarStep.styles'
import { useState } from 'react'
import { DefaultButton } from '../../../../../components/ui/DefaultButton/DefaultButton'

export const CalendarStep = ({ onNext }) => {
  const location = useLocation()
  const activeFilters = location.state?.filters || null
  const [bookingDates, setBookingDates] = useState({
    startDate: activeFilters?.checkInFilter
      ? new Date(activeFilters.checkInFilter)
      : null,
    endDate: activeFilters?.checkOutFilter
      ? new Date(activeFilters.checkOutFilter)
      : null
  })

  console.log('bookingDates:', bookingDates)

  const handleDateConfirm = (startDate, endDate) => {
    setBookingDates({ startDate, endDate })
  }

  const isValidRange =
    bookingDates.startDate &&
    bookingDates.endDate &&
    bookingDates.startDate.getTime() !== bookingDates.endDate.getTime()

  return (
    <S.CalendarStepContainer>
      <BookingCalendar
        onConfirm={handleDateConfirm}
        initialDates={bookingDates}
      ></BookingCalendar>

      <DefaultButton type='button' onClick={onNext} disabled={!isValidRange}>
        APPLY
      </DefaultButton>
    </S.CalendarStepContainer>
  )
}
