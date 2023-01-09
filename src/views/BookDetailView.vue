<template>
  <BookDetail v-if="book" :book="book" :edit="true" @remove="handleRemoveBook" />
  <BookDetailNav />
</template>

<script>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { cloneDeep } from 'lodash'
import { getBook, removeBook } from '@/store/modules/books/actionCreators'

import BookDetail from '@/components/BookDetail'
import BookDetailNav from '@/components/BookDetailNav'

export default {
  name: 'BookDetailView',

  components: {
    BookDetail,
    BookDetailNav,
  },

  props: {
    id: {
      type: String,
      required: true
    },
  },

  setup(props) {
    const router = useRouter()
    const book = ref({})

    const handleRemoveBook = (id) => {
      removeBook(id)
      router.back()
    }

    watch(() => props.id, () => {
      book.value = cloneDeep(getBook())

      if (!book.value) {
        router.back()
      }
    }, { immediate: true })

    return {
      book,
      handleRemoveBook,
    }
  }
}
</script>
