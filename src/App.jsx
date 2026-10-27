import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'

const App = () => {
  console.log('RENDER APP <App/>')

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<h1>Vantrip en construcció 🚐</h1>} />
          <Route path='/catalog' element={<h1>Catàleg de Furgonetes 🏕️</h1>} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
