import * as S from './CalendarStep.styles'

export const CalendarStep = ({ onNext }) => {
  return (
    <S.CalendarStepContainer>
      HI IM CALENDAR STEP
      <button type='button' onClick={onNext}>
        NEXT
      </button>
    </S.CalendarStepContainer>
  )
}
