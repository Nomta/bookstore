<template>
  <VApp class="book">
    <VContainer>
      <BookDetail :book="book" :detail-id="id" @remove="removeBook" />
    </VContainer>
  </VApp>
</template>

<script>
import { toRef } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
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
    const id = toRef(props, 'id')
    const book = store.getters['books/getBookById'](id.value)
    const removeBook = (id) => {
      store.commit('books/removeBook', id)
      router.push('/books')
    }

    return { book, removeBook }
  }
}
</script>
