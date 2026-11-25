import { useEffect } from 'react'
import { PageContainer } from '../../components/ui/PageContainer/PageContainer'
import * as S from './Camper.styles'
import { BookingBox } from './components/BookingBox/BookingBox'
import { CamperDetails } from './components/CamperDetails/CamperDetails'
import { getCamper } from '../../services/campers/campersService'
import { useLocation, useParams } from 'react-router-dom'
import { Spinner } from '../../components/ui/Spinner/Spinner'
import { ErrorModal } from '../../components/ui/ErrorModal/ErrorModal'
import { useFetch } from '../../hooks/useFetch'
import { CamperProvider } from './context/CamperProvider'

export const Camper = () => {
  const { id } = useParams()
  const location = useLocation()
  const { data, loading, error, executeFetch } = useFetch()

  useEffect(() => {
    executeFetch(() => getCamper(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (loading || !data) return <Spinner />
  if (error) {
    return (
      <ErrorModal
        message={error}
        onRetry={() => executeFetch(() => getCamper(id))}
      />
    )
  }

  return (
    <PageContainer>
      <CamperProvider camper={data} initialFilters={location.state?.filters}>
        <S.CamperPageWrapper>
          <CamperDetails />
          <BookingBox />
        </S.CamperPageWrapper>
      </CamperProvider>
    </PageContainer>
  )
}
