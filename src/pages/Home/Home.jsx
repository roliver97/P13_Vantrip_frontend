import { useState } from 'react'
import { SearchBox } from '../../components/search/Searchbox/Searchbox'
import { CampersGrid } from '../../components/sections/CampersGrid/CampersGrid'
import { Hero } from '../../components/sections/Hero/Hero'
import { HomeContainer } from './Home.styles'

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <HomeContainer>
      <Hero />

      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <CampersGrid searchTerm={searchTerm} />
    </HomeContainer>
  )
}
