import { useEffect, useRef, useState } from 'react'
import { SearchBox } from '../../components/search/Searchbox/Searchbox'
import { CampersGrid } from '../../components/sections/CampersGrid/CampersGrid'
import { Hero } from '../../components/sections/Hero/Hero'
import { PageContainer } from '../../components/ui/PageContainer/PageContainer'
import { CalendarModal } from '../../components/modals/CalendarModal/CalendarModal'

export const Home = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    checkInFilter: null,
    checkOutFilter: null
  })

  const [tempFilters, setTempFilters] = useState({
    searchTerm: '',
    checkIn: null,
    checkOut: null
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

  const handleDatesSelection = (startDate, endDate) => {
    setTempFilters((prev) => ({
      ...prev,
      checkIn: startDate,
      checkOut: endDate
    }))
    setIsCalendarModalOpen(false)
  }

  const handleClearTempFilters = (clearType) => {
    if (clearType === 'term') {
      setTempFilters((prev) => ({ ...prev, searchTerm: '' }))
    } else if (clearType === 'dates') {
      setTempFilters((prev) => ({ ...prev, checkIn: null, checkOut: null }))
    } else {
      setTempFilters({ searchTerm: '', checkIn: null, checkOut: null })
    }
  }

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
    setTempFilters({
      searchTerm: '',
      checkIn: null,
      checkOut: null
    })
  }

  return (
    <PageContainer>
      <div ref={heroRef} style={{ width: '100%' }}>
        <Hero />
      </div>

      <SearchBox
        tempFilters={tempFilters}
        setTempFilters={setTempFilters}
        onClearFilters={handleClearTempFilters}
        onSearchSubmit={handleMainSubmit}
        isSticky={isSearchBoxSticky}
        onOpenCalendarModal={() => setIsCalendarModalOpen(true)}
      />

      {isCalendarModalOpen && (
        <CalendarModal
          isOpen={isCalendarModalOpen}
          onDatesSelection={handleDatesSelection}
          onClose={() => setIsCalendarModalOpen(false)}
        />
      )}

      <CampersGrid filters={filters} onResetSearch={handleResetSearch} />
    </PageContainer>
  )
}
