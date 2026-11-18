import { useTranslation } from 'react-i18next'
import * as S from './StepsNav.styles'

export const StepsNav = ({ currentStep, maxStepReached, onStepClick }) => {
  const { t } = useTranslation()
  return (
    <S.StepsNav>
      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 1}
        onClick={() => onStepClick(1)}
      >
        1. {t('bookingBox.nav.dates')}
      </S.StepButton>

      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 2}
        $isDisabled={2 > maxStepReached}
        onClick={() => onStepClick(2)}
      >
        2. {t('bookingBox.nav.details')}
      </S.StepButton>

      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 3}
        $isDisabled={3 > maxStepReached}
        onClick={() => onStepClick(3)}
      >
        3. {t('bookingBox.nav.summary')}
      </S.StepButton>
    </S.StepsNav>
  )
}
