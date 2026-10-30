import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout/MainLayout'
import { Home } from './pages/Home/Home'

const App = () => {
  console.log('RENDER APP <App/>')

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<h1>Catàleg de Furgonetes 🏕️</h1>} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
