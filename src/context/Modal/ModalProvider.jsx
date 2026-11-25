import { useState } from 'react'
import { ModalContext } from './ModalContext'

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null)
  const [authModalTab, setAuthModalTab] = useState('login')

  const openAuthModal = (tab = 'login') => {
    setAuthModalTab(tab)
    setActiveModal('auth')
  }

  const openUserMenuModal = () => {
    setActiveModal('userMenu')
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        authModalTab,
        setAuthModalTab,
        openAuthModal,
        openUserMenuModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
