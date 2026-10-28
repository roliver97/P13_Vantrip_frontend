import { useState } from 'react'
import { BaseModal } from '../../ui/BaseModal/BaseModal'
import * as S from './LanguageModal.styles'
import { FlexContainer } from '../../ui/FlexContainer/FlexContainer'
import { DefaultButton } from '../../ui/DefaultButton/DefaultButton'

export const LanguageModal = ({ isOpen, onClose }) => {
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('vantrip_lang') || 'ES'
  })
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    return localStorage.getItem('vantrip_currency') || 'EUR'
  })

  const handleApplySelection = () => {
    localStorage.setItem('vantrip_lang', selectedLang)
    localStorage.setItem('vantrip_currency', selectedCurrency)

    onClose()
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title='Ajustes de idioma y moneda'
    >
      <FlexContainer>
        <p>Selecciona tu idioma y moneda preferidos</p>
        <S.CategoriesContainer>
          <FlexContainer>
            <label>Idioma</label>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
            >
              <option value='ES'>Español</option>
              <option value='EN'>English</option>
            </select>
          </FlexContainer>
          <FlexContainer>
            <label>Moneda</label>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value='EUR'>EUR (€)</option>
              <option value='USD'>USD ($)</option>
              <option value='GBP'>GBP (£)</option>
            </select>
          </FlexContainer>
        </S.CategoriesContainer>
        <DefaultButton onClick={handleApplySelection}>Aplicar</DefaultButton>
      </FlexContainer>
    </BaseModal>
  )
}
