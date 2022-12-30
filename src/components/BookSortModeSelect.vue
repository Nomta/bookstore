<template>
  <VRow align="center">
    <VCol class="d-none d-sm-block text-right">Сортировать</VCol>
    <VCol>
      <VSelect v-model="mode" :items="modes" />
    </VCol>
  </VRow>
</template>

<script>
import { useModel } from '@/composables/useModel'

const modes = [
  { title: '', value: 'default' },
  { title: 'по названию', value: 'title' },
  { title: 'по году', value: 'year' },
]

export default {
  name: 'BookSortModeSelect',

  props: {
    modelValue: String,
  },

  setup(props, ctx) {
    const mode = useModel(props, ctx)

    return {
      modes,
      mode
    }
  }
}
</script>