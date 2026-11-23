export const formatDate = (rawDateValue, locale = 'en', options = {}) => {
  if (!rawDateValue) return ''

  const parsedDate =
    rawDateValue instanceof Date ? rawDateValue : new Date(rawDateValue)

  if (Number.isNaN(parsedDate.getTime())) {
    return String(rawDateValue)
  }

  const defaultOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    ...options
  }

  return new Intl.DateTimeFormat(locale, defaultOptions).format(parsedDate)
}
