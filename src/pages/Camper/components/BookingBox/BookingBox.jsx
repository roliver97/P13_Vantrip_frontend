import * as S from './BookingBox.styles'
import { StepsNav } from './steps/nav/StepsNav'
import { CalendarStep } from './steps/CalendarStep'
import { DetailsStep } from './steps/DetailsStep'
import { SummaryStep } from './steps/SummaryStep'
import { useTranslation } from 'react-i18next'
import { useCamperContext } from '../../../../hooks/useCamperContext'

export const BookingBox = () => {
  const { t } = useTranslation()
  const { currentStep, goToStep } = useCamperContext()

  return (
    <S.BookingBoxContainer>
      <S.BookingWrapper $variant={'title'}>
        <h2>{t('bookingBox.title')}</h2>
      </S.BookingWrapper>
      <S.BookingWrapper $variant={'form'}>
        <StepsNav />

        {currentStep === 1 && <CalendarStep onNext={() => goToStep(2)} />}

        {currentStep === 2 && (
          <DetailsStep onBack={() => goToStep(1)} onNext={() => goToStep(3)} />
        )}

        {currentStep === 3 && <SummaryStep onBack={() => goToStep(2)} />}
      </S.BookingWrapper>
    </S.BookingBoxContainer>
  )
}
