import * as S from './Steps.styles'

export const SummaryStep = ({ onNext }) => {
  return (
    <S.BaseStepsContainer>
      HI IM SUMMARY STEP
      <button type='button' onClick={onNext}>
        NEXT
      </button>
    </S.BaseStepsContainer>
  )
}
