<template>
  <UiDetailNav :links="links" />
</template>

<script>
import { computed } from 'vue'
import { getPrevBookId, getNextBookId } from '@/store/modules/books/actionCreators'
import UiDetailNav from '@/components/ui/UiDetailNav'

export default {
  name: 'BookDetailNav',

  components: {
    UiDetailNav,
  },

  setup() {
    const prevBookId = computed(getPrevBookId)
    const nextBookId = computed(getNextBookId)

    const links = computed(() => [
      prevBookId.value && { name: 'book', params: { id: prevBookId.value } },
      nextBookId.value && { name: 'book', params: { id: nextBookId.value } },
    ])

    return { links }
  }
}
</script>
