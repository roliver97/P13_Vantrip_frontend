//? Unlike the `handleScrollToTop` function (JS), we create a React component (JSX) that relies on the `useEffect` hook to monitor changes to the URL pathname. It will live inside App.jsx.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
