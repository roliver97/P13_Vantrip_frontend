import * as S from './Overlay.styles'

export const Overlay = ({ isActive, onClick, zIndex }) => {
  return (
    <S.StyledOverlay $isActive={isActive} onClick={onClick} $zIndex={zIndex} />
  )
}
