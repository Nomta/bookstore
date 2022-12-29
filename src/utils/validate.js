import { parseDate } from "@/utils/DateParser"

export const validateRequired = (label = '') => {
  return (v) => !!v || `Поле ${label} обязательно для заполнения`
}

export const validateMaxLength = (maxLength) => {
  return (v) => (!v || v.length <= maxLength) || `Максимальная длина ${maxLength} символов`
}

export const validateMinDate = (date, pattern) => {
  return (v) => (!v || parseDate(v, pattern) >= date) || `Укажите дату не раньше ${date.toLocaleDateString()}`
}

export const validateMaxDate = (date, pattern) => {
  return (v) => (!v || parseDate(v, pattern) <= date) || `Укажите дату не позже ${date.toLocaleDateString()}`
}

export const validateNumberMin = (min) => {
  return (v) => (v === '' || v - min >= 0) || `Укажите число от ${min}`
}

export const validateNumberMax = (max) => {
  return (v) => (v === '' || max - v >= 0) || `Укажите число до ${max}`
}
