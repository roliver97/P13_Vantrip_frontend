import { useState } from 'react'
import { OverlayContext } from './OverlayContext'

export const OverlayProvider = ({ children }) => {
  const [activeOverlay, setActiveOverlay] = useState(null)
  const [authModalTab, setAuthModalTab] = useState('login')
  const [overlayProps, setOverlayProps] = useState({})

  const openAuthModal = (tab = 'login') => {
    setAuthModalTab(tab)
    setActiveOverlay('auth')
  }

  const openLanguageModal = () => {
    setActiveOverlay('language')
  }

  const openCalendarModal = (props = {}) => {
    setOverlayProps(props)
    setActiveOverlay('calendar')
  }

  const closeOverlay = () => {
    setActiveOverlay(null)
    setOverlayProps({})
  }

  return (
    <OverlayContext.Provider
      value={{
        activeOverlay,
        overlayProps,
        authModalTab,
        setAuthModalTab,
        openAuthModal,
        openLanguageModal,
        openCalendarModal,
        closeOverlay
      }}
    >
      {children}
    </OverlayContext.Provider>
  )
}
