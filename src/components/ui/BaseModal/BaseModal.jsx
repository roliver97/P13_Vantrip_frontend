import { Overlay } from '../Overlay/Overlay'
import * as S from './BaseModal.styles'

export const BaseModal = ({
  isOpen,
  onClose,
  title,
  zIndexOverlay,
  fullHeight = false,
  className,
  children
}) => {
  return (
    <>
      <Overlay isActive={isOpen} onClick={onClose} zIndex={zIndexOverlay} />

      <S.ModalContainer
        className={className}
        $isOpen={isOpen}
        $fullHeight={fullHeight}
      >
        <S.CloseButton onClick={onClose}>X</S.CloseButton>

        {title && (
          <S.ModalHeader>
            <h2>{title}</h2>
          </S.ModalHeader>
        )}

        <S.ModalContent $fullHeight={fullHeight}>{children}</S.ModalContent>
      </S.ModalContainer>
    </>
  )
}
