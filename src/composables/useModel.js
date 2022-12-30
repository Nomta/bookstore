import { computed, toRef } from 'vue'
import { getUId } from '@/utils/common'

export const useModel = (props, { emit }) => {
  const modelValue = toRef(props, 'modelValue')

  return computed({
    get: () => modelValue.value,
    set: (value) => emit('update:modelValue', value)
  })
}

export const useBookModel = (props, { getters, commit }) => {
  const id = toRef(props, 'id')

  return computed({
    get: () => id.value
      ? getters['books/getBookById'](id.value)
      : { id: getUId() },
    set: (value) => commit('books/setBook', value),
  })
}
