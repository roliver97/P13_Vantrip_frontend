const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px'
}

export const device = {
  mobileS: `@media (min-width: ${sizes.mobileS})`,
  mobileM: `@media (min-width: ${sizes.mobileM})`,
  mobileL: `@media (min-width: ${sizes.mobileL})`,
  tablet: `@media (min-width: ${sizes.tablet})`,
  laptop: `@media (min-width: ${sizes.laptop})`,
  desktop: `@media (min-width: ${sizes.desktop})`
}
