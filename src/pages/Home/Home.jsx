import { useEffect, useRef, useState } from 'react'
import { SearchBox } from '../../components/search/Searchbox/Searchbox'
import { CampersGrid } from '../../components/sections/CampersGrid/CampersGrid'
import { Hero } from '../../components/sections/Hero/Hero'
import { HomeContainer } from './Home.styles'
import { CalendarModal } from '../../components/modals/CalendarModal/CalendarModal'

export const Home = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    checkIn: '',
    checkOut: ''
  })
  const [isSearchBoxSticky, setIsSearchBoxSticky] = useState(false)
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)

  const heroRef = useRef(null)

  useEffect(() => {
    const currentHero = heroRef.current
    if (!currentHero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect

        setIsSearchBoxSticky(rect.bottom <= rect.height / 2 + 45)
      },
      { root: null, threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    )

    observer.observe(currentHero)

    return () => {
      if (currentHero) observer.unobserve(currentHero)
    }
  }, [])

  return (
    <HomeContainer>
      <div ref={heroRef} style={{ width: '100%' }}>
        <Hero />
      </div>

      <SearchBox
        onSearchSubmit={(updatedFilters) => setFilters(updatedFilters)}
        isSticky={isSearchBoxSticky}
        onOpenCalendarModal={() => setIsCalendarModalOpen(true)}
      />
      {isCalendarModalOpen && (
        <CalendarModal
          isOpen={isCalendarModalOpen}
          onClose={() => setIsCalendarModalOpen(false)}
        />
      )}

      <CampersGrid filters={filters} />
    </HomeContainer>
  )
}
