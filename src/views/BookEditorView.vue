<template>
  <VApp class="book">
    <VContainer>
      <BookEditor v-model:book="book" :min-year="minYear" :date-format="dateFormat" />
    </VContainer>
  </VApp>
</template>

<script>
import { useStore } from 'vuex'
import { useBookModel } from '@/composables/useModel'
import { config } from '@/config'
import BookEditor from '@/components/BookEditor.vue'

const { minYear, dateFormat } = config

export default {
  name: 'BookCreateView',
  components: {
    BookEditor
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    },
  },
  setup(props) {
    const store = useStore()
    const book = useBookModel(props, store)

    return { book, minYear, dateFormat }
  }
}
</script>
