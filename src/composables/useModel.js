import { computed } from 'vue'
import { cloneDeep } from 'lodash'

export const useModel = (props, { emit }, propName = 'modelValue') => {
  return computed({
    get: () => cloneDeep(props[propName]),
    set: (value) => emit(`update:${propName}`, value)
  })
}
