import { watch, toRef } from 'vue'

export const useWatchEffect = (props, propName) => {
  const prop = toRef(props, propName)

  return (update) => watch(prop, update, { immediate: true })
}
