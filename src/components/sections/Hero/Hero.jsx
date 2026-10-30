import { useTranslation } from 'react-i18next'
import { TitleComponent } from '../../ui/Title/Title'
import * as S from './Hero.styles'
import { SpanComponent } from '../../ui/Span/Span'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <S.HeroSection>
      <S.HeroContainer>
        <TitleComponent fontSize={'3rem'}>
          {t('hero.title1')}{' '}
          <SpanComponent variant={'light'}>van </SpanComponent>
          {t('hero.title2')}{' '}
          <SpanComponent variant={'light'}>trip</SpanComponent>
        </TitleComponent>
      </S.HeroContainer>
    </S.HeroSection>
  )
}
