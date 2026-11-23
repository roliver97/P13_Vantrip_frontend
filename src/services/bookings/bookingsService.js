import { API_URL } from '../../utils/constants/constants'

export const createBooking = async (payload) => {
  try {
    const response = await fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        errorData.message || 'Error posting this booking on server'
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error in createBooking service:', error.message)
    throw error
  }
}
