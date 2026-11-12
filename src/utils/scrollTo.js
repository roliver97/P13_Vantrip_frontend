export const handleScrollToTop = (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const handleLogoClick = (e, pathname) => {
  if (pathname === '/') {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export const handleScrollToSection = (e, pathname, sectionId) => {
  if (pathname === '/') {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    section && section.scrollIntoView({ behavior: 'smooth' })
  } else {
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 150)
  }
}
