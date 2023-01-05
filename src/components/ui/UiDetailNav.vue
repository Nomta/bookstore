<template>
  <VAppBar flat location="bottom">
    <VContainer class="d-flex justify-center">
      <component :is="prevLink ? 'RouterLink' : 'div'" :to="prevLink">
        <VBtn variant="" color="secondary" :disabled="!prevLink" class="font-weight-bold">Назад</VBtn>
      </component>
      <component :is="nextLink ? 'RouterLink' : 'div'" :to="nextLink">
        <VBtn variant="" color="secondary" :disabled="!nextLink" class="font-weight-bold">Вперед</VBtn>
      </component>
    </VContainer>
  </VAppBar>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'UiDetailNav',

  props: {
    links: {
      type: Array,
      required: true
    },
  },

  setup(props) {
    return {
      prevLink: computed(() => props.links[0]),
      nextLink: computed(() => props.links[1]),
    }
  }
}
</script>