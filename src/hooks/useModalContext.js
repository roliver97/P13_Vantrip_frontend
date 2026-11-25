import { useContext } from 'react'
import { ModalContext } from '../context/Modal/ModalContext'

export const useModalContext = () => {
  const ctx = useContext(ModalContext)
  if (!ctx) {
    throw new Error('useModalContext must be used within an ModalProvider')
  }
  return ctx
}
