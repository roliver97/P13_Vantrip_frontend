import { ImageSlider } from '../../../../components/ui/ImageSlider/ImageSlider'
import * as S from './CamperDetails.styles'
import { calculateVanPricing } from '../../../../utils/priceCalculations'
import { useTranslation } from 'react-i18next'
import { useCamperContext } from '../../../../hooks/useCamperContext'

export const CamperDetails = () => {
  const { t } = useTranslation()
  const { camper, bookingData } = useCamperContext()
  const defaultImgErrorSrc = './src/assets/images/default_van_error_1.jpg'
  const images =
    camper.images && camper.images.length > 0
      ? camper.images
      : [defaultImgErrorSrc]

  const { pricePerDay, totalPrice } = calculateVanPricing(
    camper,
    bookingData.checkInFilter,
    bookingData.checkOutFilter
  )

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
        <S.InfoWrapper $variant={'price'}>
          <p>
            {pricePerDay.formatted} {t('camperDetails.pricePerNight')}{' '}
            <span>({totalPrice.formatted})</span>
          </p>
        </S.InfoWrapper>
      </S.DetailInfo>
    </S.DetailContainer>
  )
}
