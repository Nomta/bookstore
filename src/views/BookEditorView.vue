<template>
  <BookEditor :book="book" @update:book="handleUpdateBook" :min-year="minYear" :date-format="dateFormat" />
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { config } from '@/config'
import { getUId } from '@/utils/common'
import { useWatchEffect } from '@/composables/useWatchEffect'
import { getBook, createBook, updateBook } from '@/store/modules/books/actionCreators'
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
    const router = useRouter()
    const book = ref({})
    const useEffect = useWatchEffect(props, 'id')

    const handleUpdateBook = (book) => {
      (props.id ? updateBook : createBook)(book)
      router.push({ name: 'book', params: { id: book.id } })
    }

    useEffect(() => {
      if (props.id) {
        book.value = getBook()

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
