import { API_URL } from '../utils/constants/constants'

export const getCampers = async () => {
  try {
    const response = await fetch(`${API_URL}/campers`)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Error loading vans from the server')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error in getCampers service:', error.message)
    throw error
  }
}
