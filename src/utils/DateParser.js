import { parse } from 'date-fns'

export const parseDate = (dateStr, pattern) => {
  if (pattern) {
    return parse(dateStr, pattern, new Date())
  }
  return new Date(dateStr)
}
