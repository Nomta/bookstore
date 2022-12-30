<template>
  <VApp>
    <VContainer>
      <BookSortModeSelect v-model="mode" />
      <BookList :books="books" />
    </VContainer>
  </VApp>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import BookList from '@/components/BookList'
import BookSortModeSelect from '@/components/BookSortModeSelect'

export default {
  name: 'BooksCatalog',

  components: {
    BookList,
    BookSortModeSelect,
  },

  setup() {
    const store = useStore()

    const mode = computed({
      get: () => store.state.books.mode,
      set: (value) => store.commit('books/setMode', value),
    })

    const books = computed(() => store.getters['books/getSortedBooks'](mode.value))

    return {
      books,
      mode,
    }
  }
}
</script>
