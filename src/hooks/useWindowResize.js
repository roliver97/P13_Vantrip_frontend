import { useEffect } from 'react'

export const useWindowResize = (onClose) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [onClose])
}
