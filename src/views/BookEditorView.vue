<template>
  <BookEditor :book="book" @update:book="handleUpdateBook" :min-year="minYear" :date-format="dateFormat" />
</template>

<script>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { cloneDeep } from 'lodash'

import { config } from '@/config'
import { getUId } from '@/utils/common'

import {
  getBook,
  createBook,
  updateBook
} from '@/store/modules/books/actionCreators'

import BookEditor from '@/components/BookEditor.vue'

const { minYear, dateFormat } = config

export default {
  name: 'BookCreateView',

  components: {
    BookEditor,
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

    const handleUpdateBook = (book) => {
      (props.id ? updateBook : createBook)(book)
      router.push({ name: 'book', params: { id: book.id } })
    }

    watch(() => props.id, () => {
      if (props.id) {
        book.value = cloneDeep(getBook())

        if (!book.value) {
          router.replace({ name: 'notFound' })
        }
      }
      else {
        book.value = { id: getUId() }
      }
    }, { immediate: true })

    return { book, handleUpdateBook, minYear, dateFormat }
  }
}
</script>
