import { useEffect, useState } from 'react'

export const useFetch = (fetchFunction) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!fetchFunction) return

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchFunction()
        setData(result)
      } catch (error) {
        setError(error.message || 'Unknown error while loading data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fetchFunction])

  return { data, loading, error }
}
