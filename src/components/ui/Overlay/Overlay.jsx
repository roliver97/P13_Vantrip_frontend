import * as S from './Overlay.styles'

export const Overlay = ({ isOpen, onClick, zIndex }) => {
  return <S.StyledOverlay $isOpen={isOpen} onClick={onClick} $zIndex={zIndex} />
}
