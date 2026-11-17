import { ImageSlider } from '../../../../components/ui/ImageSlider/ImageSlider'
import * as S from './CamperDetails.styles'

export const CamperDetails = ({ camper }) => {
  const defaultImgErrorSrc = './src/assets/images/default_van_error_1.jpg'
  const images =
    camper.images && camper.images.length > 0
      ? camper.images
      : [defaultImgErrorSrc]

  return (
    <S.DetailContainer>
      <ImageSlider images={images} variant={'detail'}></ImageSlider>
      <S.DetailInfo>
        <S.InfoWrapper $variant={'title'}>
          <h2>{camper.title}</h2>
        </S.InfoWrapper>
        <S.InfoWrapper $variant={'subtitle'}>
          <h4>
            <span>{camper.brand}</span> - <span>{camper.modelName}</span>
          </h4>
          |
          <S.CapacityWrapper>
            <img src='/src/assets/icons/person_icon.svg' alt='Person Icon' />{' '}
            <span>{camper.capacity}</span>
          </S.CapacityWrapper>
        </S.InfoWrapper>
        <S.InfoWrapper $variant={'info'}>
          <p>{camper.description}</p>
          <p>📍{camper.location}</p>
        </S.InfoWrapper>
      </S.DetailInfo>
    </S.DetailContainer>
  )
}
