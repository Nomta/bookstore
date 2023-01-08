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

import BookList from '@/components/BookList'
import ModeSelect from '@/components/ModeSelect'
import { getMode, setMode } from '@/store/modules/localSettings/actionCreators'
import { getSortedBooks } from '@/store/modules/books/actionCreators'

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
    const mode = computed({
      get: getMode,
      set: setMode,
    })

    const books = computed(getSortedBooks)

    return {
      books,
      modes,
      mode,
    }
  }
}
</script>
