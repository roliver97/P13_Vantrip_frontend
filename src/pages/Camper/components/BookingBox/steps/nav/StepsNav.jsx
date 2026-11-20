import { useTranslation } from 'react-i18next'
import * as S from './StepsNav.styles'
import { useCamperContext } from '../../../../../../hooks/useCamperContext'

export const StepsNav = () => {
  const { t } = useTranslation()
  const { currentStep, maxStepReached, goToStep, bookingData } =
    useCamperContext()

  const hasValidDates = Boolean(bookingData.startDate && bookingData.endDate)

  const hasValidDetails =
    Boolean(bookingData.details) &&
    Object.values(bookingData.details).every(
      (val) => typeof val === 'string' && val.trim() !== ''
    )

  const isSummaryReady = hasValidDates && hasValidDetails

  const handleNavStepClick = (targetStep) => {
    if (targetStep <= maxStepReached) {
      if (targetStep === 1) {
        goToStep(targetStep)
      } else if (targetStep === 2 && hasValidDates) {
        goToStep(targetStep)
      } else if (targetStep === 3 && isSummaryReady) {
        goToStep(targetStep)
      }
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
        $isDisabled={2 > maxStepReached || !hasValidDates}
        disabled={2 > maxStepReached || !hasValidDates}
        onClick={() => handleNavStepClick(2)}
      >
        2. {t('bookingBox.nav.details')}
      </S.StepButton>

      <S.StepButton
        type='button'
        variant='navStep'
        $isActive={currentStep === 3}
        $isDisabled={3 > maxStepReached || !isSummaryReady}
        disabled={3 > maxStepReached || !isSummaryReady}
        onClick={() => handleNavStepClick(3)}
      >
        3. {t('bookingBox.nav.summary')}
      </S.StepButton>
    </S.StepsNav>
  )
}
