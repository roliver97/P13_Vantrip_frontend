import { useState } from 'react'
import * as S from './ImageSlider.styles'

export const ImageSlider = ({ images, variant }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

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

  if (!images) return

  return (
    <S.VanImagesWrapper $variant={variant}>
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
  )
}
