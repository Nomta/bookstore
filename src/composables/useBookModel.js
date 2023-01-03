import { computed } from 'vue'
import { isNil } from 'lodash'
import { getUId } from '@/utils/common'

export const useBookModel = (props, { getters, commit }) => {
  return computed({
    get: () => isNil(props.id)
      ? { id: getUId() }
      : getters['books/getBookById'](props.id),
    set: (value) => commit('books/setBook', value)
  })
}
