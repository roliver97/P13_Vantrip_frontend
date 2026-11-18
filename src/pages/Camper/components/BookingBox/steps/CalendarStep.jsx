import { useLocation } from 'react-router-dom'
import { BookingCalendar } from '../../../../../components/ui/BookingCalendar/BookingCalendar'
import * as S from './CalendarStep.styles'
import { useState } from 'react'

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

  const handleDateConfirm = (startDate, endDate) => {
    setBookingDates({ startDate, endDate })
  }

  return (
    <S.CalendarStepContainer>
      <BookingCalendar
        onConfirm={handleDateConfirm}
        initialDates={bookingDates}
        showActions={false}
      ></BookingCalendar>

      <button type='button' onClick={onNext}>
        NEXT
      </button>
    </S.CalendarStepContainer>
  )
}
