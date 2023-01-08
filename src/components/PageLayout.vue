<template>
  <VApp>
    <VContainer>
      <UiLoader v-if="loading" />
      <UiErrorAlert v-else-if="error" />
      <slot v-else />
    </VContainer>
  </VApp>
</template>

<script>
import { computed } from 'vue'
import { getLoading, getError } from '@/store/modules/books/actionCreators'

import UiLoader from '@/components/ui/UiLoader'
import UiErrorAlert from '@/components/ui/UiErrorAlert'

export default {
  name: 'PageLayout',

  components: {
    UiLoader,
    UiErrorAlert,
  },

  setup() {
    const loading = computed(getLoading)
    const error = computed(getError)

    return {
      loading,
      error,
    }
  }
}
</script>