import { useState } from 'react'
import * as S from './DetailsStep.styles'
import { DefaultButton } from '../../../../../components/ui/DefaultButton/DefaultButton'
import { useTranslation } from 'react-i18next'

export const DetailsStep = ({ currentFormData, onUpdateData, onNext }) => {
  const { t } = useTranslation()
  const [values, setValues] = useState(
    currentFormData?.details || {
      camper: '',
      startDate: null,
      endDate: null,
      name: '',
      email: '',
      phone: ''
    }
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdateData({ details: values })
    onNext()
  }

  const isValidForm = Object.values(values).every(
    (value) => value !== '' && value !== null && value !== undefined
  )
  // With "every", if a single condition fails, it returns false.

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.FieldWrapper>
        <label>Label</label>
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
          required
        />
      </S.FieldWrapper>
      <DefaultButton type='submit' disabled={!isValidForm}>
        {t('bookingBox.detailsStep.submitBtn')}
      </DefaultButton>
    </S.FormContainer>
  )
}
