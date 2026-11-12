import { useCallback, useEffect, useRef, useState } from 'react'
import { SearchBox } from './components/Searchbox/Searchbox'
import { CampersGrid } from './components/CampersGrid/CampersGrid'
import { Hero } from './components/Hero/Hero'
import { PageContainer } from '../../components/ui/PageContainer/PageContainer'
import { CalendarModal } from '../../components/modals/CalendarModal/CalendarModal'
import { getCampers } from '../../services/campersService'
import { useFetch } from '../../hooks/useFetch'

export const Home = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    checkInFilter: null,
    checkOutFilter: null
  })

  const fetchCampersMemoized = useCallback(() => {
    return getCampers(filters)
  }, [filters])

  const fetchData = useFetch(fetchCampersMemoized)

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

  const handleMainSubmit = (updatedSearchData) => {
    const { searchTerm, checkInFilter, checkOutFilter } = updatedSearchData

    const isSameAsCurrent =
      filters.searchTerm === searchTerm &&
      filters.checkInFilter === checkInFilter &&
      filters.checkOutFilter === checkOutFilter

    if (isSameAsCurrent) {
      return
    }

    setFilters(updatedSearchData)
  }

  const handleResetSearch = () => {
    setFilters({
      searchTerm: '',
      checkInFilter: null,
      checkOutFilter: null
    })
  }

  return (
    <PageContainer>
      <div ref={heroRef} style={{ width: '100%' }}>
        <Hero />
      </div>

      <SearchBox
        onSearchSubmit={handleMainSubmit}
        isSticky={isSearchBoxSticky}
        onOpenCalendarModal={() => setIsCalendarModalOpen(true)}
      />

      {isCalendarModalOpen && (
        <CalendarModal
          isOpen={isCalendarModalOpen}
          onClose={() => setIsCalendarModalOpen(false)}
        />
      )}

      <CampersGrid
        fetchData={fetchData}
        filters={filters}
        onResetSearch={handleResetSearch}
      />
    </PageContainer>
  )
}
