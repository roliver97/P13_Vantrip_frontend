import * as S from './DetailsStep.styles'

export const DetailsStep = ({ onNext }) => {
  return (
    <S.DetailsStepContainer>
      HI IM DETAILS STEP
      <button type='button' onClick={onNext}>
        NEXT
      </button>
    </S.DetailsStepContainer>
  )
}
