import { API_URL } from '../../utils/constants/constants'

export const loginUser = async ({ email, password }) => {
  const res = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || 'Error during login')
  }

  return data
}

export const registerUser = async (formData) => {
  const res = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    body: formData
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || 'Error during registration')
  }

  return data
}

export const getCurrentUser = async (token) => {
  const res = await fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || 'Session expired or invalid')
  }

  return data
}
