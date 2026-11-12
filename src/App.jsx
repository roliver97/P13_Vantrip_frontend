import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout/MainLayout'
import { Home } from './pages/Home/Home'
import { useEffect } from 'react'
import { initializeOptions } from './utils/initializeOptions'
import { Camper } from './pages/Camper/Camper'
import { ScrollToTop } from './utils/ScrollToTop'

const App = () => {
  console.log('RENDER APP <App/>')

  useEffect(() => {
    initializeOptions()
  }, [])

  return (
    <>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/campers/:id' element={<Camper />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
