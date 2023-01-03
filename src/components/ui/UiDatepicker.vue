<template>
  <Datepicker v-model="date" :locale="locale" :year-range="years" :min-date="minDate" :max-date="maxDate"
    :format="format" selectText="Выбрать" cancelText="">
    <template #dp-input="{ value }">
      <VTextField :label="label" :model-value="value" :rules="rules" validate-on="blur" />
    </template>
  </Datepicker>
</template>

<script>
import { ref, computed } from 'vue'
import { useModel } from '@/composables/useModel'
import { isDateValid } from '@/utils/DateParser'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { defineUserLanguage } from '@/utils/language'

import {
  validateRequired,
  validateMinDate,
  validateMaxDate,
} from '@/utils/validate'

export default {
  name: 'UiDatepicker',

  components: { Datepicker },

  props: {
    modelValue: Date,
    minDate: Date,
    maxDate: Date,
    format: String,
    label: String,
  },

  emits: ['update:model-value'],

  setup(props, ctx) {

    const minDate = ref(null)
    const maxDate = ref(null)
    const date = useModel(props, ctx)

    const rules = []

    if (props.required) {
      rules.push(validateRequired())
    }

    if (isDateValid(props.minDate)) {
      minDate.value = props.minDate
      rules.push(validateMinDate(props.minDate, props.format))
    }

    if (isDateValid(props.maxDate)) {
      maxDate.value = props.maxDate
      rules.push(validateMaxDate(props.maxDate, props.format))
    }

    const years = computed(() => {
      if (minDate.value && maxDate.value)
        return [
          minDate.value.getFullYear(),
          maxDate.value.getFullYear()
        ]
    })

    const locale = defineUserLanguage()

    return {
      date,
      years,
      locale,
      rules,
    }
  }
}
</script>