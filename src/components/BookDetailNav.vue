<template>
  <UiDetailNav :links="links" />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import UiDetailNav from '@/components/ui/UiDetailNav'

export default {
  name: 'BookDetailNav',

  props: {
    detailId: {
      type: [Number, String],
      required: true
    },
  },

  components: {
    UiDetailNav,
  },

  setup(props) {
    const store = useStore()

    const prevBookId = computed(() => store.getters['books/getPrevBookId'](props.detailId))
    const nextBookId = computed(() => store.getters['books/getNextBookId'](props.detailId))

    const links = computed(() => [
      prevBookId.value && { name: 'book', params: { id: prevBookId.value } },
      nextBookId.value && { name: 'book', params: { id: nextBookId.value } },
    ])

    return { links }
  }
}
</script>
