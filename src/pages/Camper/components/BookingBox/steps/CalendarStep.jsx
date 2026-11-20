import { BookingCalendar } from '../../../../../components/ui/BookingCalendar/BookingCalendar'
import * as StyledSteps from './Steps.styles'
import { useState } from 'react'
import { DefaultButton } from '../../../../../components/ui/DefaultButton/DefaultButton'
import { useTranslation } from 'react-i18next'
import { useCamperContext } from '../../../../../hooks/useCamperContext'

export const CalendarStep = ({ onNext }) => {
  const { t } = useTranslation()
  const { bookingData, updateBookingData, maxStepReached } = useCamperContext()

  const [bookingDates, setBookingDates] = useState({
    startDate: bookingData.startDate ? new Date(bookingData.startDate) : null,
    endDate: bookingData.endDate ? new Date(bookingData.endDate) : null
  })

  const handleDateConfirm = (startDate, endDate) => {
    setBookingDates({ startDate, endDate })
  }

  const handleUpdateData = () => {
    if (!isValidRange) return
    updateBookingData(bookingDates)
    onNext()
  }

  const isValidRange =
    bookingDates.startDate &&
    bookingDates.endDate &&
    bookingDates.startDate.getTime() !== bookingDates.endDate.getTime()

  const isSameRange =
    bookingDates.startDate?.getTime() ===
      (bookingData.startDate
        ? new Date(bookingData.startDate).getTime()
        : null) &&
    bookingDates.endDate?.getTime() ===
      (bookingData.endDate ? new Date(bookingData.endDate).getTime() : null)

  return (
    <StyledSteps.BaseStepContainer>
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
    </StyledSteps.BaseStepContainer>
  )
}
