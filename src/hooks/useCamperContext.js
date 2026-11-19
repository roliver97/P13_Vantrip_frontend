import { useContext } from 'react'
import { CamperContext } from '../pages/Camper/context/CamperContext'

export const useCamperContext = () => {
  const ctx = useContext(CamperContext)
  if (!ctx) {
    throw new Error('useCamperContext must be used within a CamperProvider')
  }
  return ctx
}
