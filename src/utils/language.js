import { config } from '@/config'

export const defineUserLanguage = () => {
  const language = window.navigator && (
    window.navigator.language
    || window.navigator.systemLanguage
    || window.navigator.userLanguage
  )

  if (!language) {
    return config.language
  }

  return language.split('-')[0].toLowerCase()
}
