<template>
  <VApp>
    <VContainer>
      <template v-if="books.length">
        <ModeSelect v-model="mode" :modes="modes" :label="Сортировать" />
        <BookList :books="books" />
      </template>
      <template v-else>Здесь пока нет книг...</template>
    </VContainer>
  </VApp>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import BookList from '@/components/BookList'
import ModeSelect from '@/components/ModeSelect'

const modes = [
  { title: 'по названию', value: 'title' },
  { title: 'по году', value: 'year' },
]

export default {
  name: 'BooksCatalog',

  components: {
    BookList,
    ModeSelect,
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
      modes,
      mode,
    }
  }
}
</script>
