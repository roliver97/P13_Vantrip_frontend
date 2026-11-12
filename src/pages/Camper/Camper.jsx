import { PageContainer } from '../../components/ui/PageContainer/PageContainer'
import * as S from './Camper.styles'

export const Camper = () => {
  return (
    <PageContainer>
      <S.CamperPageWrapper>
        <div
          style={{
            backgroundColor: 'red',
            boxShadow: 'var(--vantrip-box-shadow'
          }}
        >
          HOLA
        </div>
        <div
          style={{
            backgroundColor: 'red',
            boxShadow: 'var(--vantrip-box-shadow'
          }}
        >
          adeu
        </div>
        {/* <CamperDetails camper={camper} />
        <BookingBox camper={camper} /> */}
      </S.CamperPageWrapper>
    </PageContainer>
  )
}
