import * as S from './VanCard.styles'
import { calculateVanPricing } from '../../../../../utils/priceCalculations'
import { ImageSlider } from '../../../../../components/ui/ImageSlider/ImageSlider'

export const VanCardItem = ({ van, filters, t }) => {
  const defaultImgErrorSrc = './src/assets/images/default_van_error_1.jpg'
  const images =
    van.images && van.images.length > 0 ? van.images : [defaultImgErrorSrc]

  const { searchTerm, checkInFilter, checkOutFilter } = filters

  const hasActiveDatesFilter = checkInFilter && checkOutFilter

  const { pricePerDay } = calculateVanPricing(
    van,
    checkInFilter,
    checkOutFilter
  )

  return (
    <S.VanCard>
      <S.VanOwnerLink to={`/users/${van.owner._id}`}>
        <S.VanOwnerAvatar src={van.owner.avatar} alt='' />
      </S.VanOwnerLink>
      <S.VanCardLink
        key={van._id}
        to={`/campers/${van._id}`}
        state={{ filters }}
      >
        <ImageSlider images={images} />
        <S.VanInfo>
          <h2>{van.title}</h2>
          <p>
            <span>{van.brand}</span> - <span>{van.modelName}</span>
          </p>
          <p>📍{van.location}</p>

          {hasActiveDatesFilter ? (
            <S.TagsWrapper>
              <S.PriceTag>
                {pricePerDay.formatted} <span>{t('vanCard.priceSuffix')}</span>
              </S.PriceTag>
              <S.AvailabilityTag>
                {t('vanCard.availabilityMsg')}
              </S.AvailabilityTag>
            </S.TagsWrapper>
          ) : searchTerm ? (
            <S.AvailabilityTag $selectDatesTag={true}>
              {t('vanCard.selectDatesMsg')}
            </S.AvailabilityTag>
          ) : (
            ''
          )}
        </S.VanInfo>
      </S.VanCardLink>
    </S.VanCard>
  )
}
