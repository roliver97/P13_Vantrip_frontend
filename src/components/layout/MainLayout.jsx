import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
