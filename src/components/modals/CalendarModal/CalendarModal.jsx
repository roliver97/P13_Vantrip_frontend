import { useTranslation } from 'react-i18next'
import { BaseModal } from '../../ui/BaseModal/BaseModal'

export const CalendarModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation()

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={t('langModal.title')}
      zIndexOverlay={1000}
    ></BaseModal>
  )
}
