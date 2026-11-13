import { useEffect, useRef, useState } from 'react'
import { SearchBox } from './components/Searchbox/Searchbox'
import { CampersGrid } from './components/CampersGrid/CampersGrid'
import { Hero } from './components/Hero/Hero'
import { PageContainer } from '../../components/ui/PageContainer/PageContainer'
import { CalendarModal } from '../../components/modals/CalendarModal/CalendarModal'
import { getCampers } from '../../services/campersService'
import { useFetch } from '../../hooks/useFetch'
import { handleScrollToSection } from '../../utils/scrollTo'
import { useLocation } from 'react-router-dom'

export const Home = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    checkInFilter: null,
    checkOutFilter: null
  })
  const [submittedFilters, setSubmittedFilters] = useState({
    searchTerm: '',
    checkInFilter: null,
    checkOutFilter: null
  })
  const [isSearchBoxSticky, setIsSearchBoxSticky] = useState(false)
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)

  const { data, loading, error, executeFetch } = useFetch(800)

  const currentLocation = useLocation()

  const heroRef = useRef(null)

  useEffect(() => {
    executeFetch(() => getCampers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    handleScrollToSection(e, currentLocation.pathname, 'campers')
    setSubmittedFilters(filters)
    await executeFetch(() => getCampers(filters))
  }

  const handleResetSearch = async (e, inputType) => {
    let newFilters = { ...filters }

    if (inputType === 'term') {
      newFilters.searchTerm = ''
    } else if (inputType === 'dates') {
      newFilters.checkInFilter = null
      newFilters.checkOutFilter = null
    } else {
      // Reset complet de tot
      newFilters = {
        searchTerm: '',
        checkInFilter: null,
        checkOutFilter: null
      }
    }
    e.preventDefault()
    e.stopPropagation()
    handleScrollToSection(e, currentLocation.pathname, 'campers')
    setFilters(newFilters)
  }

  return (
    <PageContainer>
      <div ref={heroRef} style={{ width: '100%' }}>
        <Hero />
      </div>

      <SearchBox
        filters={filters}
        setFilters={setFilters}
        onSubmit={handleSubmit}
        onClear={handleResetSearch}
        isSticky={isSearchBoxSticky}
        onOpenCalendarModal={() => setIsCalendarModalOpen(true)}
      />

      {isCalendarModalOpen && (
        <CalendarModal
          filters={filters}
          setFilters={setFilters}
          onSubmit={handleSubmit}
          onClear={handleResetSearch}
          isOpen={isCalendarModalOpen}
          onClose={() => setIsCalendarModalOpen(false)}
        />
      )}

      <CampersGrid
        fetchData={{ data, loading, error }}
        filters={submittedFilters}
        onClear={handleResetSearch}
      />
    </PageContainer>
  )
}
