import { useTranslation } from 'react-i18next'
import * as S from './SummaryStep.styles'
import * as StyledSteps from '../Steps.styles'
import { useCamperContext } from '../../../../../../hooks/useCamperContext'
import { calculateVanPricing } from '../../../../../../utils/priceCalculations'
import { useFetch } from '../../../../../../hooks/useFetch'
import { createBooking } from '../../../../../../services/bookings/bookingsService'
import { Error } from '../../../../../../components/ui/Error/Error'
import { Spinner } from '../../../../../../components/ui/Spinner/Spinner'
import { DefaultButton } from '../../../../../../components/ui/DefaultButton/DefaultButton'
import { formatDate } from '../../../../../../utils/dateFormat'
import { useEffect } from 'react'

export const SummaryStep = () => {
  const { t, i18n } = useTranslation()
  const { bookingData, camper } = useCamperContext()

  const { data, loading, error, executeFetch, simulateFetch } = useFetch(800)

  const { nights, totalPrice } = calculateVanPricing(
    camper,
    bookingData.startDate,
    bookingData.endDate
  )

  useEffect(() => {
    return simulateFetch(800)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleConfirmBooking = async () => {
    if (!camper || loading) return

    const payload = {
      camper: camper._id,
      name: bookingData.details?.name,
      email: bookingData.details?.email,
      phone: bookingData.details?.phone,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      totalPrice: totalPrice
    }

    await executeFetch(() => createBooking(payload))
  }

  const formattedStartDate = formatDate(bookingData.startDate, i18n.language)
  const formattedEndDate = formatDate(bookingData.endDate, i18n.language)

  if (error)
    return (
      <StyledSteps.BaseStepContainer>
        <Error
          message={`Error on fetch - ${error}`}
          onRetry={handleConfirmBooking}
        />
      </StyledSteps.BaseStepContainer>
    )

  if (loading)
    return (
      <StyledSteps.BaseStepContainer>
        <Spinner message={t('bookingBox.summaryStep.spinnerMsg')} />
      </StyledSteps.BaseStepContainer>
    )

  const createdBooking = data?.booking ?? data

  if (createdBooking) {
    return (
      <StyledSteps.BaseStepContainer>
        <p>{t('bookingBox.summaryStep.success')}</p>
        <span>ID: {createdBooking._id}</span>
      </StyledSteps.BaseStepContainer>
    )
  }

  return (
    <StyledSteps.BaseStepContainer>
      <p>{t('bookingBox.summaryStep.intro')}</p>
      <S.SummaryWrapper>
        <div>
          <S.CamperTitle>{camper?.title}</S.CamperTitle>
          <span>{camper?.location}</span>
        </div>
        <div>
          <p>
            {formattedStartDate} → {formattedEndDate} ({nights} nights)
          </p>
        </div>
        <S.DetailsField>
          <p>
            <span>{t('bookingBox.summaryStep.detailsPrefixes.name')}</span>
            {bookingData.details?.name}
          </p>
          <p>
            <span>{t('bookingBox.summaryStep.detailsPrefixes.email')}</span>
            {bookingData.details?.email}{' '}
          </p>
          <p>
            <span>{t('bookingBox.summaryStep.detailsPrefixes.phone')}</span>
            {bookingData.details?.phone}
          </p>
        </S.DetailsField>
        <div>
          <p>
            <strong>{t('bookingBox.summaryStep.total')}</strong>{' '}
            {totalPrice.formatted ?? totalPrice}
          </p>
        </div>
      </S.SummaryWrapper>

      <DefaultButton
        type='button'
        disabled={loading}
        onClick={handleConfirmBooking}
      >
        {t('bookingBox.summaryStep.confirmBtn')}
      </DefaultButton>
    </StyledSteps.BaseStepContainer>
  )
}
