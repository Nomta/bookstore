<template>
  <VApp class="book">
    <VContainer>
      <BookDetail v-if="book" :book="book" :edit="true" @remove="handleRemoveBook" />
    </VContainer>
    <BookDetailNav />
  </VApp>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useWatchEffect } from '@/composables/useWatchEffect'
import BookDetail from '@/components/BookDetail'
import BookDetailNav from '@/components/BookDetailNav'
import { getBook, removeBook } from '@/store/modules/books/actionCreators'

export default {
  name: 'BookDetailView',

  components: {
    BookDetail,
    BookDetailNav,
  },

  props: {
    id: {
      type: [Number, String],
      required: true
    },
  },

  setup(props) {
    const router = useRouter()
    const book = ref({})
    const useEffect = useWatchEffect(props, 'id')

    const handleRemoveBook = (id) => {
      removeBook(id)
      router.push({ name: 'books' })
    }

    useEffect(() => {
      book.value = getBook()

      if (!book.value) {
        router.replace({ name: 'notFound' })
      }
    })

    return {
      book,
      handleRemoveBook,
    }
  }
}
</script>
