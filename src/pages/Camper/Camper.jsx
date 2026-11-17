import { useEffect } from 'react'
import { PageContainer } from '../../components/ui/PageContainer/PageContainer'
import * as S from './Camper.styles'
import { BookingBox } from './components/BookingBox/BookingBox'
import { CamperDetails } from './components/CamperDetails/CamperDetails'
import { getCamper } from '../../services/campers/campersService'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components/ui/Spinner/Spinner'
import { Error } from '../../components/ui/Error/Error'
import { useFetch } from '../../hooks/useFetch'

export const Camper = () => {
  const { id } = useParams()
  const { data, loading, error, executeFetch } = useFetch()

  useEffect(() => {
    executeFetch(() => getCamper(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (loading) return <Spinner />
  if (error) {
    return (
      <Error
        message={error}
        onRetry={() => executeFetch(() => getCamper(id))}
      />
    )
  }

  return (
    <PageContainer>
      <S.CamperPageWrapper>
        <CamperDetails camper={data} />
        <BookingBox />

        {/* <CamperDetails camper={camper} />
        <BookingBox camper={camper} /> */}
      </S.CamperPageWrapper>
    </PageContainer>
  )
}
