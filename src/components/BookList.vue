<template>
  <ul v-if="books.length">
    <li v-for="book in books" :key="book.id" class="mb-2">
      <RouterLink :to="{ name: 'book', params: { id: book.id } }" tabindex="0">
        <BookDetail :book="book" />
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import BookDetail from '@/components/BookDetail'

export default {
  name: 'BookList',

  components: {
    BookDetail,
  },

  props: {
    books: {
      type: Array,
      default: []
    },
  },
}
</script>