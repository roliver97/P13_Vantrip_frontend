import { useEffect, useState } from 'react'

export const useFetch = (fetchFunction, minLoadingTime = 800) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!fetchFunction) return
    let timerId = null

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchFunction()
        timerId = setTimeout(() => {
          setData(result)
          setLoading(false)
        }, minLoadingTime)
      } catch (error) {
        setError(error.message || 'Unknown error while loading data')
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      if (timerId) clearTimeout(timerId)
    }
  }, [fetchFunction, minLoadingTime])

  return { data, loading, error }
}
