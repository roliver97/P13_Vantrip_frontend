import { ModalLayout } from '../../ui/ModalLayout/ModalLayout'
import { BookingCalendar } from '../../ui/BookingCalendar/BookingCalendar'
import { useOverlayContext } from '../../../hooks/useOverlayContext'

export const CalendarModal = () => {
  const { activeOverlay, overlayProps, closeOverlay } = useOverlayContext()

  const isOpen = activeOverlay === 'calendar'
  if (!isOpen) return null

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={closeOverlay}
      title='Select Dates'
      zIndexOverlay={1000}
    >
      <BookingCalendar
        onClose={closeOverlay}
        variant={'modal'}
        {...overlayProps}
      />
    </ModalLayout>
  )
}
