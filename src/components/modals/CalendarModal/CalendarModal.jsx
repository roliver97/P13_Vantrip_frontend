import { BaseModal } from '../../ui/BaseModal/BaseModal'
import { BookingCalendar } from '../../ui/BookingCalendar/BookingCalendar'

export const CalendarModal = ({ isOpen, onClose, ...restProps }) => {
  // ...restProps (Rest Operator): Groups the props that were not destructured, allowing them to be automatically passed down from parent to child
  if (!isOpen) return null

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title='Select Dates'
      zIndexOverlay={1000}
    >
      <BookingCalendar onClose={onClose} variant={'modal'} {...restProps} />
    </BaseModal>
  )
}
