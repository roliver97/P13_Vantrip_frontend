import { useState } from 'react'

export const useFetch = (fetchFunction, minLoadingTime = 800) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const executeFetch = async (fetchFunction) => {
    if (!fetchFunction) return

    try {
      setLoading(true)
      setError(null)
      const result = await fetchFunction()
      setTimeout(() => {
        setData(result)
        setLoading(false)
      }, minLoadingTime)
    } catch (error) {
      setError(error.message || 'Unknown error while loading data')
      setLoading(false)
    }
  }

  return { data, loading, error, executeFetch }
}
