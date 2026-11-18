import { useState } from 'react'
import * as S from './BookingBox.styles'
import { StepsNav } from './steps/nav/StepsNav'
import { CalendarStep } from './steps/CalendarStep'
import { DetailsStep } from './steps/DetailsStep'
import { SummaryStep } from './steps/SummaryStep'
import { useTranslation } from 'react-i18next'

export const BookingBox = () => {
  const { t } = useTranslation()
  const [currentStep, setCurrentStep] = useState(1)
  const [maxStepReached, setMaxStepReached] = useState(1)
  const [bookingData, setBookingData] = useState({
    startDate: null,
    endDate: null,
    details: {
      camper: '',
      startDate: null,
      endDate: null,
      name: '',
      email: '',
      phone: ''
    }
  })

  const handleStepClick = (targetStep) => {
    if (targetStep <= maxStepReached) {
      setCurrentStep(targetStep)
    }
  }

  const handleUpdateBookingData = (stepData) => {
    setBookingData((prev) => ({ ...prev, ...stepData }))
  }

  return (
    <S.BookingBoxContainer>
      <S.BookingWrapper $variant={'title'}>
        <h2>{t('bookingBox.title')}</h2>
      </S.BookingWrapper>
      <S.BookingWrapper $variant={'form'}>
        <StepsNav
          currentStep={currentStep}
          maxStepReached={maxStepReached}
          onStepClick={handleStepClick}
        />
        {currentStep === 1 && (
          <CalendarStep
            currentBookingData={bookingData}
            onUpdateData={handleUpdateBookingData}
            maxStepReached={maxStepReached}
            onNext={() => {
              setCurrentStep(2)
              setMaxStepReached(Math.max(maxStepReached, 2))
            }}
          />
        )}

        {currentStep === 2 && (
          <DetailsStep
            currentFormData={bookingData}
            onUpdateData={handleUpdateBookingData}
            onBack={() => setCurrentStep(1)}
            onNext={() => {
              setCurrentStep(3)
              setMaxStepReached(Math.max(maxStepReached, 3))
            }}
          />
        )}

        {currentStep === 3 && <SummaryStep onBack={() => setCurrentStep(2)} />}
      </S.BookingWrapper>
    </S.BookingBoxContainer>
  )
}
