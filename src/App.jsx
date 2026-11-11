import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout/MainLayout'
import { Home } from './pages/Home/Home'
import { useEffect } from 'react'
import { initializeOptions } from './utils/initializeOptions'

const App = () => {
  console.log('RENDER APP <App/>')

  useEffect(() => {
    initializeOptions()
  }, [])

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
