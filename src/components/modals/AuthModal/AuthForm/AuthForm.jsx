import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import * as S from './AuthForm.styles'
import { DefaultButton } from '../../../ui/DefaultButton/DefaultButton'
import { useModalContext } from '../../../../hooks/useModalContext'
import { ErrorModal } from '../../../ui/ErrorModal/ErrorModal'

export const AuthForm = () => {
  const { login, register } = useAuthContext()
  const { authModalTab, closeModal } = useModalContext()
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    avatar: null
  })
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const currentMode = authModalTab

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'avatar') {
      setFormData((prev) => ({ ...prev, avatar: files?.[0] || null }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      if (currentMode === 'login') {
        await login({
          email: formData.email,
          password: formData.password
        })
      } else {
        const dataToSend = new FormData()
        dataToSend.append('firstName', formData.firstName)
        dataToSend.append('lastName', formData.lastName)
        dataToSend.append('username', formData.username)
        dataToSend.append('email', formData.email)
        dataToSend.append('password', formData.password)
        if (formData.avatar) {
          dataToSend.append('avatar', formData.avatar)
        }
        await register(dataToSend)
      }

      setError(null)
      closeModal()
    } catch (error) {
      setError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <S.AuthForm onSubmit={handleSubmit}>
      <S.InputsWrapper>
        {currentMode === 'register' && (
          <>
            <S.InputField>
              <label>{t('authModal.form.labels.name')}</label>
              <input
                type='text'
                name='firstName'
                placeholder={t('authModal.form.labels.name')}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </S.InputField>
            <S.InputField>
              <label>{t('authModal.form.labels.lastName')}</label>
              <input
                type='text'
                name='lastName'
                placeholder={t('authModal.form.labels.lastName')}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </S.InputField>
            <S.InputField>
              <label>{t('authModal.form.labels.username')}</label>
              <input
                type='text'
                name='username'
                placeholder={t('authModal.form.labels.username')}
                value={formData.username}
                onChange={handleChange}
                required
              />
            </S.InputField>
            <S.InputField>
              <label>{t('authModal.form.labels.avatar')}</label>
              <input
                type='file'
                name='avatar'
                accept='image/*'
                onChange={handleChange}
              />
            </S.InputField>
          </>
        )}

        <S.InputField>
          <label>{t('authModal.form.labels.email')}</label>
          <input
            type='email'
            name='email'
            placeholder={t('authModal.form.labels.email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </S.InputField>
        <S.InputField>
          <label>{t('authModal.form.labels.password')}</label>
          <input
            type='password'
            name='password'
            placeholder={t('authModal.form.labels.password')}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </S.InputField>
        {error && <S.ErrorForm message={error} retry={false} />}
      </S.InputsWrapper>

      <DefaultButton type='submit' disabled={isSubmitting}>
        {isSubmitting
          ? t('authModal.form.submitBtn.loading')
          : currentMode === 'login'
            ? t('authModal.form.submitBtn.login')
            : t('authModal.form.submitBtn.register')}
      </DefaultButton>
    </S.AuthForm>
  )
}
