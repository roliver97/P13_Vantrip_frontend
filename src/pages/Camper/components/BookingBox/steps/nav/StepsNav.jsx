import * as S from './StepsNav.styles'

export const StepsNav = ({ currentStep, maxStepReached, onStepClick }) => {
  return (
    <S.StepsNav>
      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 1}
        onClick={() => onStepClick(1)}
      >
        1. DATES
      </S.StepButton>

      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 2}
        $isDisabled={2 > maxStepReached}
        onClick={() => onStepClick(2)}
      >
        2. DETAILS
      </S.StepButton>

      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 3}
        $isDisabled={3 > maxStepReached}
        onClick={() => onStepClick(3)}
      >
        3. SUMMARY
      </S.StepButton>
    </S.StepsNav>
  )
}
