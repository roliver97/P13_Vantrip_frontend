import { API_URL } from '../utils/constants/constants'

export const getCampers = async (filters = {}) => {
  try {
    const params = new URLSearchParams()

    if (filters.searchTerm) params.append('query', filters.searchTerm)
    if (filters.checkIn) params.append('startDate', filters.checkIn)
    if (filters.checkOut) params.append('endDate', filters.checkOut)
    if (filters.location) params.append('location', filters.location)
    if (filters.capacity) params.append('capacity', filters.capacity)

    const response = await fetch(`${API_URL}/campers?${params.toString()}`)

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
