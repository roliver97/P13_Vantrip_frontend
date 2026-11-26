import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import {
  getCurrentUser,
  loginUser,
  registerUser
} from '../../services/auth/authService'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(() =>
    localStorage.getItem('vantrip_token')
  )
  const [isAuthLoading, setIsAuthLoading] = useState(() =>
    Boolean(localStorage.getItem('vantrip_token'))
  )

  const logout = () => {
    localStorage.removeItem('vantrip_token')
    setToken(null)
    setUser(null)
  }

  useEffect(() => {
    if (!token) return

    let isCancelled = false
    // isCancelled will be used in the event that the user unmounts the component before the response arrives.
    // That is why we change its state within the unmount return function.

    const checkSession = async () => {
      //? Inside a `useEffect`, we can only declare an `async` function if we execute it immediately afterward.
      try {
        const userData = await getCurrentUser(token)
        if (isCancelled) return
        setUser(userData)
      } catch {
        if (isCancelled) return
        localStorage.removeItem('vantrip_token')
        setToken(null)
        setUser(null)
      } finally {
        if (!isCancelled) {
          setIsAuthLoading(false)
        }
      }
    }

    checkSession()

    return () => {
      isCancelled = true
    }
  }, [token])

  const login = async (credentials) => {
    const data = await loginUser(credentials)
    localStorage.setItem('vantrip_token', data.token)
    setToken(data.token)
    setUser(data.user)
    return data.user
  }
  const register = async (formData) => {
    const data = await registerUser(formData)
    localStorage.setItem('vantrip_token', data.token)
    setToken(data.token)
    setUser(data.user)
    return data.user
  }

  const isAuthenticated = Boolean(user && token)

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isAuthLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
