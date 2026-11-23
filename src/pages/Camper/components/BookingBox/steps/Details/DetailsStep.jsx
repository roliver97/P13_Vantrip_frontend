import { useState } from 'react'
import * as S from './DetailsStep.styles'
import * as StyledSteps from '../Steps.styles'
import { DefaultButton } from '../../../../../../components/ui/DefaultButton/DefaultButton'
import { useTranslation } from 'react-i18next'
import { useCamperContext } from '../../../../../../hooks/useCamperContext'

export const DetailsStep = ({ onNext }) => {
  const { t } = useTranslation()
  const { bookingData, updateBookingData } = useCamperContext()

  const [values, setValues] = useState({
    camper: bookingData.details?.camper || '',
    name: bookingData.details?.name || '',
    email: bookingData.details?.email || '',
    phone: bookingData.details?.phone || ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const phoneDigitsCount = values.phone.replace(/\D/g, '').length
  const isValidPhone = phoneDigitsCount >= 7 && phoneDigitsCount <= 15

  const isValidForm =
    Object.values(values).every(
      (value) => typeof value === 'string' && value.trim() !== ''
    ) && isValidPhone
  // With "every", if a single condition fails, it returns false.

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValidForm) return

    const trimmedDetails = Object.fromEntries(
      Object.entries(values).map(([key, val]) => [key, val.trim()])
    )

    updateBookingData({ details: trimmedDetails })
    onNext()
  }

  const handleClear = () => {
    const emptyFields = {
      name: '',
      email: '',
      phone: ''
    }
    setValues((prev) => ({
      ...prev,
      ...emptyFields
    }))

    updateBookingData({
      details: emptyFields
    })
  }

  return (
    <StyledSteps.BaseStepContainer>
      <S.TitlesWrapper>{t('bookingBox.detailsStep.title')}</S.TitlesWrapper>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.FieldsContainer>
          <S.FieldWrapper>
            <label htmlFor='name'>
              {t('bookingBox.detailsStep.nameField.label')}
            </label>
            <input
              id='name'
              type='text'
              name='name'
              autoComplete='name'
              placeholder={t('bookingBox.detailsStep.nameField.placeholder')}
              value={values.name}
              onChange={handleChange}
              required
            />
          </S.FieldWrapper>

          <S.FieldWrapper>
            <label htmlFor='email'>
              {t('bookingBox.detailsStep.emailField.label')}
            </label>
            <input
              id='email'
              type='email'
              name='email'
              autoComplete='email'
              placeholder={t('bookingBox.detailsStep.emailField.placeholder')}
              value={values.email}
              onChange={handleChange}
              required
            />
          </S.FieldWrapper>

          <S.FieldWrapper>
            <label htmlFor='phone'>
              {t('bookingBox.detailsStep.phoneField.label')}
            </label>
            <input
              id='phone'
              type='tel'
              name='phone'
              autoComplete='tel'
              placeholder={t('bookingBox.detailsStep.phoneField.placeholder')}
              value={values.phone}
              onChange={handleChange}
              required
            />
          </S.FieldWrapper>
        </S.FieldsContainer>

        <S.ClearButton type='button' variant={'clear'} onClick={handleClear}>
          {t('bookingBox.detailsStep.clearBtn')}
        </S.ClearButton>

        <DefaultButton type='submit' disabled={!isValidForm}>
          {t('bookingBox.detailsStep.submitBtn')}
        </DefaultButton>
      </S.FormContainer>
    </StyledSteps.BaseStepContainer>
  )
}
