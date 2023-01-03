<template>
  <VApp class="book">
    <VContainer>
      <BookDetail v-if="book" :book="book" :detail-id="id" @remove="handleRemoveBook" />
    </VContainer>
  </VApp>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useWatchEffect } from '@/composables/useWatchEffect'
import BookDetail from '@/components/BookDetail'

export default {
  name: 'BookDetailView',

  components: {
    BookDetail,
  },

  props: {
    id: {
      type: [Number, String],
      required: true
    },
  },

  setup(props) {
    const store = useStore()
    const router = useRouter()
    const book = ref({})

    const getBook = (id) => store.getters['books/getBookById'](id)
    const removeBook = (id) => store.commit('books/removeBook', id)
    const useEffect = useWatchEffect(props, 'id')

    const handleRemoveBook = (id) => {
      removeBook(id)
      router.push({ name: 'books' })
    }

    useEffect(() => {
      book.value = getBook(props.id)

      if (!book.value) {
        router.replace({ name: 'notFound' })
      }
    })

    return { book, handleRemoveBook }
  }
}
</script>
