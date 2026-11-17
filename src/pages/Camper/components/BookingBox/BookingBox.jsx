import * as S from './BookingBox.styles'

export const BookingBox = () => {
  return (
    <S.BookingContainer>
      <S.BookingWrapper $variant={'title'}>
        <h2>Book your camper</h2>
      </S.BookingWrapper>
      <S.BookingWrapper $variant={'form'}></S.BookingWrapper>
    </S.BookingContainer>
  )
}
