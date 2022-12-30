import { parse, isValid } from 'date-fns'

export const parseDate = (dateStr, pattern) => {
  if (pattern) {
    return parse(dateStr, pattern, new Date())
  }
  return new Date(dateStr)
}

export const formatDate = (date) => {
  if (isValid(date)) {
    return date.toLocaleDateString()
  }
}

export const isDateValid = (value) => {
  return isValid(value)
}
