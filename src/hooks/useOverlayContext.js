import { useContext } from 'react'
import { OverlayContext } from '../context/Overlay/OverlayContext'

export const useOverlayContext = () => {
  const ctx = useContext(OverlayContext)
  if (!ctx) {
    throw new Error('useOverlayContext must be used within an OverlayProvider')
  }
  return ctx
}
