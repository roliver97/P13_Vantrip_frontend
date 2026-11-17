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
        <h2>{camper.title}</h2>
        <h4>
          <span>{camper.brand}</span> - <span>{camper.modelName}</span>
        </h4>
        <p>📍{camper.location}</p>
        <p>{camper.description}</p>
      </S.DetailInfo>
    </S.DetailContainer>
  )
}
