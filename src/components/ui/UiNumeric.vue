<template>
  <VTextField type="number" :model-value="modelValue" :rules="rules" :required="required" :label="label"
    validate-on="blur" @input="handleInput" />
</template>

<script>
import {
  validateRequired,
  validateNumberMin,
  validateNumberMax
} from '@/utils/validate'

export default {
  name: 'UiNumeric',

  props: {
    modelValue: Number,
    required: Boolean,
    min: Number,
    max: Number,
    label: String,
  },

  emits: ['update:model-value'],

  setup(props, { emit }) {
    const rules = []

    if (props.required) {
      rules.push(validateRequired())
    }

    if (props.min) {
      rules.push(validateNumberMin(props.min))
    }

    if (props.max) {
      rules.push(validateNumberMax(props.max))
    }

    const handleInput = (event) => {
      const value = Number(event.target.value)

      if (Number.isInteger(value)) {
        emit('update:model-value', value)
      }
    }

    return {
      handleInput,
      rules,
    }
  }
}
</script>

<style scoped>

</style>