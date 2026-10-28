import { Overlay } from '../Overlay/Overlay'
import * as S from './BaseModal.styles'

export const BaseModal = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} zIndex={1000} />

      <S.ModalContainer $isOpen={isOpen}>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>

        {title && (
          <S.ModalHeader>
            <h2>{title}</h2>
          </S.ModalHeader>
        )}

        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </>
  )
}
