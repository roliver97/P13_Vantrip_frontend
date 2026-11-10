import { useState } from 'react'
import * as S from './VanCard.styles'
import { convertPrice } from '../../../utils/priceCalculations'

export const VanCardItem = ({ van, filters, t }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const defaultImgErrorSrc = './src/assets/images/default_van_error_1.jpg'
  const images =
    van.images && van.images.length > 0 ? van.images : [defaultImgErrorSrc]

  const { searchTerm, checkInFilter, checkOutFilter } = filters

  const hasActiveDatesFilter = checkInFilter && checkOutFilter

  const hasSeasonalPricing =
    hasActiveDatesFilter &&
    van.seasonalPricing &&
    van.seasonalPricing.some((season) => {
      return (
        new Date(checkInFilter) >= new Date(season.startDate) &&
        new Date(checkOutFilter) <= new Date(season.endDate)
      )
    })

  const filteredPricePerDay = hasSeasonalPricing
    ? van.seasonalPricePerDay
    : van.defaultPricePerDay

  const convertedPricePerDay = convertPrice(filteredPricePerDay).formatted

  const handlePrevImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <S.VanCard>
      <S.VanOwnerLink to={`/users/${van.owner._id}`}>
        <S.VanOwnerAvatar src={van.owner.avatar} alt='' />
      </S.VanOwnerLink>
      <S.VanCardLink key={van._id} to={`/campers/${van._id}`}>
        <S.VanImagesWrapper>
          <S.SliderTrack $translateIndex={currentImgIndex}>
            {images.map((img, index) => (
              <S.VanImg key={index} $image={img} />
            ))}
          </S.SliderTrack>

          {images.length > 1 && (
            <>
              <S.SliderButton
                variant={'slider'}
                $direction='prev'
                onClick={handlePrevImage}
              >
                ‹
              </S.SliderButton>
              <S.SliderButton
                variant={'slider'}
                $direction='next'
                onClick={handleNextImage}
              >
                ›
              </S.SliderButton>
            </>
          )}
        </S.VanImagesWrapper>

        <S.VanInfo>
          <h3>{van.title}</h3>
          <p>
            <span>{van.brand}</span> - <span>{van.modelName}</span>
          </p>
          <p>📍{van.location}</p>

          {hasActiveDatesFilter ? (
            <S.TagsWrapper>
              <S.PriceTag>
                {convertedPricePerDay} <span>{t('vanCard.priceSuffix')}</span>
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
