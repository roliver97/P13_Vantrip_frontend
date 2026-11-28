import * as S from './BaseModal.styles'

export const BaseModal = ({
  isOpen,
  onClose,
  title,
  zIndex,
  fullHeight = false,
  className,
  children
}) => {
  return (
    <S.ModalContainer
      className={className}
      $zIndex={zIndex}
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
  )
}
