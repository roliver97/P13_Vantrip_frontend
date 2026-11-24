import { useState } from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext'

export const AuthModal = () => {
  const { isAuthModalOpen, authModalTab, closeAuthModal, login, register } =
    useAuthContext()

  const [mode, setMode] = useState(authModalTab)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    avatar: ''
  })

  if (!isAuthModalOpen) return null
}
