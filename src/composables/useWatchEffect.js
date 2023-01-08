import { watch, toRef } from 'vue'

/**
 * Наблюдает за свойством propName и запускает handler при его изменениях
 *
 * @param {Object} props - реактивный объект (например, входные параметры)
 * @param {string} propName - имя наблюдаемого свойства в объекте props
 * @returns {Function} - функция, принимающая handler и запускающая его при изменениях propName
 */

export const useWatchEffect = (props, propName) => {
  const prop = toRef(props, propName)

  return (handler) => watch(prop, handler, { immediate: true })
}
