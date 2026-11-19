import { useState } from 'react'
import { CamperContext } from './CamperContext'

export const CamperProvider = ({ camper, initialFilters, children }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [maxStepReached, setMaxStepReached] = useState(1)
  const [bookingData, setBookingData] = useState({
    startDate: initialFilters?.checkInFilter || null,
    endDate: initialFilters?.checkOutFilter || null,
    details: {
      camper: camper._id,
      name: '',
      email: '',
      phone: ''
    }
  })

  const updateBookingData = (partialData) => {
    setBookingData((prev) => ({
      ...prev,
      ...partialData,
      details: partialData.details
        ? { ...prev.details, ...partialData.details }
        : prev.details
    }))
  }

  const goToStep = (step) => {
    setCurrentStep(step)
    setMaxStepReached((prev) => Math.max(prev, step))
  }

  return (
    <CamperContext.Provider
      value={{
        camper,
        initialFilters,
        currentStep,
        maxStepReached,
        setCurrentStep,
        goToStep,
        bookingData,
        updateBookingData
      }}
    >
      {children}
    </CamperContext.Provider>
  )
}
