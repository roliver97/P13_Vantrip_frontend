import * as S from './SummaryStep.styles'

export const SummaryStep = ({ onNext }) => {
  return (
    <S.SummaryStepContainer>
      HI IM SUMMARY STEP
      <button type='button' onClick={onNext}>
        NEXT
      </button>
    </S.SummaryStepContainer>
  )
}
