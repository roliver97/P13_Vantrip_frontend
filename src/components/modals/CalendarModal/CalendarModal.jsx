import { BaseModal } from '../../ui/BaseModal/BaseModal'
import { BookingCalendar } from '../../ui/BookingCalendar/BookingCalendar'
import { useOverlayContext } from '../../../hooks/useOverlayContext'

export const CalendarModal = () => {
  const { activeOverlay, overlayProps, closeOverlay } = useOverlayContext()

  const isOpen = activeOverlay === 'calendar'
  if (!isOpen) return null

  return (
    <BaseModal
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
    </BaseModal>
  )
}
