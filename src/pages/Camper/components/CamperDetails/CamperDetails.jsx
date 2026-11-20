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

  const { pricePerDay, totalPrice, nights } = calculateVanPricing(
    camper,
    bookingData.startDate,
    bookingData.endDate
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
          <div>
            <p>{t('camperDetails.pricePerNight.title')}</p>{' '}
            <S.PricesSpan>
              {pricePerDay.formatted}
              {t('camperDetails.pricePerNight.sufix')}
            </S.PricesSpan>
          </div>
          <div>
            <p>{t('camperDetails.totalPrice')}</p>
            <div style={{ flexDirection: 'row', alignItems: 'center' }}>
              <S.PricesSpan>{totalPrice.formatted}</S.PricesSpan>{' '}
              <S.NightsSpan>{nights} nights</S.NightsSpan>
            </div>
          </div>
        </S.InfoWrapper>
      </S.DetailInfo>
    </S.DetailContainer>
  )
}
