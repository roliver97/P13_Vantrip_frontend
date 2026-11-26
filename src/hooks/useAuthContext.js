import { useContext } from 'react'
import { AuthContext } from '../context/Auth/AuthContext'

export const useAuthContext = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
