import { useState } from 'react'
import * as S from './VanCard.styles'

export const VanCardItem = ({ van, checkInFilter, checkOutFilter, t }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const defaultImgErrorSrc = './src/assets/images/default_van_error_1.jpg'
  const images =
    van.images && van.images.length > 0 ? van.images : [defaultImgErrorSrc]

  const hasActiveDatesFilter = checkInFilter && checkOutFilter

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
    <S.VanCard key={van._id} to={`/campers/${van._id}`}>
      <S.VanImagesWrapper>
        <S.VanImg $image={images[currentImgIndex]} />
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
          <span>{van.brand}</span> <span>{van.modelName}</span>
        </p>
        <p>📍{van.location}</p>
        <S.PriceTag>{van.price}</S.PriceTag>
        {hasActiveDatesFilter && (
          <S.AvailabilityTag>
            {t('campersGrid.availabilityMsg')}
          </S.AvailabilityTag>
        )}
      </S.VanInfo>
    </S.VanCard>
  )
}
