import { useTranslation } from 'react-i18next'
import * as S from './StepsNav.styles'
import { useCamperContext } from '../../../../../../hooks/useCamperContext'

export const StepsNav = () => {
  const { t } = useTranslation()
  const { currentStep, maxStepReached, goToStep } = useCamperContext()

  const handleNavStepClick = (targetStep) => {
    if (targetStep <= maxStepReached) {
      goToStep(targetStep)
    }
  }

  return (
    <S.StepsNav>
      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 1}
        onClick={() => handleNavStepClick(1)}
      >
        1. {t('bookingBox.nav.dates')}
      </S.StepButton>

      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 2}
        $isDisabled={2 > maxStepReached}
        onClick={() => handleNavStepClick(2)}
      >
        2. {t('bookingBox.nav.details')}
      </S.StepButton>

      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 3}
        $isDisabled={3 > maxStepReached}
        onClick={() => handleNavStepClick(3)}
      >
        3. {t('bookingBox.nav.summary')}
      </S.StepButton>
    </S.StepsNav>
  )
}
