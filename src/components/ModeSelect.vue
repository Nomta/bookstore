<template>
  <VRow align="center">
    <VCol class="d-none d-sm-block text-right">{{ label }}</VCol>
    <VCol>
      <VSelect v-model="mode" :items="modes" />
    </VCol>
  </VRow>
</template>

<script>
import { useModel } from '@/composables/useModel'

export default {
  name: 'ModeSelect',

  props: {
    modelValue: String,
    label: String,
    modes: {
      type: Array,
      required: true
    }
  },

  setup(props, ctx) {
    return {
      mode: useModel(props, ctx)
    }
  }
}
</script>