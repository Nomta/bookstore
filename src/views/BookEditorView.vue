<template>
  <VApp class="book">
    <VContainer>
      <BookEditor :book="book" @update:book="handleUpdateBook" :min-year="minYear" :date-format="dateFormat" />
    </VContainer>
  </VApp>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { config } from '@/config'
import { getUId } from '@/utils/common'
import { useWatchEffect } from '@/composables/useWatchEffect'

import BookEditor from '@/components/BookEditor.vue'

const { minYear, dateFormat } = config

export default {
  name: 'BookCreateView',

  components: {
    BookEditor,
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
    const updateBook = (value) => store.commit('books/setBook', value)
    const useEffect = useWatchEffect(props, 'id')

    const handleUpdateBook = (book) => {
      updateBook(book)
      router.push({ name: 'book', params: { id: book.id } })
    }

    useEffect(() => {
      if (props.id) {
        book.value = getBook(props.id)

        if (!book.value) {
          router.replace({ name: 'notFound' })
        }
      }
      else {
        book.value = { id: getUId() }
      }
    })

    return { book, handleUpdateBook, minYear, dateFormat }
  }
}
</script>
