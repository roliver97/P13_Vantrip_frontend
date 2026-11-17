import { useState } from 'react'
import * as S from './BookingBox.styles'
import { StepsNav } from './steps/nav/StepsNav'
import { CalendarStep } from './steps/CalendarStep'
import { DetailsStep } from './steps/DetailsStep'
import { SummaryStep } from './steps/SummaryStep'

export const BookingBox = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [maxStepReached, setMaxStepReached] = useState(1)

  const handleStepClick = (targetStep) => {
    if (targetStep <= maxStepReached) {
      setCurrentStep(targetStep)
    }
  }

  return (
    <S.BookingBoxContainer>
      <S.BookingWrapper $variant={'title'}>
        <h2>Book your camper</h2>
      </S.BookingWrapper>
      <S.BookingWrapper $variant={'form'}>
        <StepsNav
          currentStep={currentStep}
          maxStepReached={maxStepReached}
          onStepClick={handleStepClick}
        />
        {currentStep === 1 && (
          <CalendarStep
            onNext={() => {
              setCurrentStep(2)
              setMaxStepReached(Math.max(maxStepReached, 2))
            }}
          />
        )}

        {currentStep === 2 && (
          <DetailsStep
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
