import { useTranslation } from 'react-i18next'
import { TitleComponent } from '../../../../components/ui/Title/Title'
import * as S from './Hero.styles'
import { SpanComponent } from '../../../../components/ui/Span/Span'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <S.HeroSection id='hero'>
      <S.HeroContainer>
        <TitleComponent fontSize={'2.8rem'}>
          {t('hero.title1')}{' '}
          <SpanComponent variant={'light'}>van </SpanComponent>
          {t('hero.title2')}{' '}
          <SpanComponent variant={'light'}>trip</SpanComponent>
        </TitleComponent>
      </S.HeroContainer>
    </S.HeroSection>
  )
}
