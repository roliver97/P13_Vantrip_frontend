import { Overlay } from '../Overlay/Overlay'
import { BaseModal } from '../BaseModal/BaseModal'
import * as S from './ModalLayout.styles'

export const ModalLayout = ({
  isOpen,
  onClose,
  title,
  zIndexOverlay = 100,
  placement = 'x-center y-center',
  fullHeight = false,
  className,
  children
}) => {
  return (
    <S.ModalViewport
      $isOpen={isOpen}
      $placement={placement}
      $zIndex={zIndexOverlay}
    >
      <Overlay isActive={isOpen} onClick={onClose} zIndex={zIndexOverlay} />

      <BaseModal
        className={className}
        isOpen={isOpen}
        title={title}
        zIndex={zIndexOverlay}
        fullHeight={fullHeight}
        onClose={onClose}
      >
        {children}
      </BaseModal>
    </S.ModalViewport>
  )
}
