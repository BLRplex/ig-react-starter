import { SEL_LOCALE } from '@/constants'

export const setLocale = locale => ({
  payload: locale,
  type: SEL_LOCALE,
})
