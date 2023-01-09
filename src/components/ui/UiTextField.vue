<template>
  <VTextField :model-value="modelValue" :rules="rules" :required="required" :label="label" validate-on="blur"
    @input="handleInput" />
</template>

<script>
import {
  validateRequired,
  validateMaxLength
} from '@/utils/validate'

export default {
  name: 'UiTextField',

  props: {
    modelValue: String,
    required: Boolean,
    maxLength: String,
    label: String,
  },

  emits: ['update:model-value'],

  setup(props, { emit }) {
    const rules = []

    if (props.required) {
      rules.push(validateRequired())
    }

    if (props.maxLength) {
      rules.push(validateMaxLength(props.maxLength))
    }

    const handleInput = (event) => {
      const value = event.target.value

      if (!props.maxLength || value.length <= props.maxLength) {
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