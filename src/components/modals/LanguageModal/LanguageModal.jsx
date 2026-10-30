import { useState } from 'react'
import { BaseModal } from '../../ui/BaseModal/BaseModal'
import * as S from './LanguageModal.styles'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'
import i18n from '../../../config/i18n'
import { useTranslation } from 'react-i18next'

export const LanguageModal = ({ isOpen, onClose }) => {
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('vantrip_lang') || 'ES'
  })
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    return localStorage.getItem('vantrip_currency') || 'EUR'
  })

  const { t } = useTranslation()

  const handleApplySelection = () => {
    localStorage.setItem('vantrip_lang', selectedLang)
    localStorage.setItem('vantrip_currency', selectedCurrency)

    i18n.changeLanguage(selectedLang)

    onClose()
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={t('langModal.title')}>
      <FlexContainer>
        <p>{t('langModal.subtitle')}</p>
        <S.CategoriesContainer>
          <FlexContainer>
            <label>{t('langModal.langLabel')}</label>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
            >
              <option value='es'>Español</option>
              <option value='en'>English</option>
            </select>
          </FlexContainer>
          <FlexContainer>
            <label>{t('langModal.currencyLabel')}</label>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value='eur'>EUR (€)</option>
              <option value='usd'>USD ($)</option>
              <option value='gbp'>GBP (£)</option>
            </select>
          </FlexContainer>
        </S.CategoriesContainer>
        <DefaultButton onClick={handleApplySelection}>
          {t('langModal.button')}
        </DefaultButton>
      </FlexContainer>
    </BaseModal>
  )
}
