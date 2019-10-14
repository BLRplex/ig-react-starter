import { ENGLISH, RUSSIAN } from '@/constants'

export default language => {
  switch (language) {
    case ENGLISH:
    case RUSSIAN: return require(`./${language}.js`).default
    default: return {}
  }
}
