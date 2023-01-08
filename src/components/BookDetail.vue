<template>
  <VCard class="pa-5 pb-3">
    <VRow>
      <VCol cols="3">
        <VImg v-if="book.image" :src="book.image" />
        <VImg v-else src="@/assets/images/book-default.svg" class="default-image" />
      </VCol>
      <VCol class="text-left">
        <VCardTitle>
          {{ book.title }}
        </VCardTitle>
        <VTable>
          <tbody>
            <tr>
              <td>Автор</td>
              <td>{{ book.authorFirstName }} {{ book.authorLastName }}</td>
            </tr>
            <tr>
              <td>Количество страниц</td>
              <td>{{ book.pageCount }}</td>
            </tr>
            <tr v-if="book.publisherName">
              <td>Издательство</td>
              <td>{{ book.publisherName }}</td>
            </tr>
            <tr v-if="book.publishingYear">
              <td>Год издания</td>
              <td>{{ book.publishingYear }}</td>
            </tr>
            <tr v-if="book.releaseDate">
              <td>Дата выхода в тираж</td>
              <td>{{ formatDate(book.releaseDate) }}</td>
            </tr>
          </tbody>
        </VTable>
      </VCol>
    </VRow>
    <VCardActions v-if="edit" class="actions d-flex justify-end">
      <RouterLink :to="{ name: 'editBook', params: { id: book.id } }">
        <VBtn color="secondary">
          Редактировать
        </VBtn>
      </RouterLink>
      <VBtn color="error" @click="removeBook">
        Удалить
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script>
import { formatDate } from '@/utils/DateParser'

export default {
  name: 'BookDetail',

  props: {
    book: {
      type: Object,
      required: true
    },
    edit: Boolean,
  },

  emits: ['remove'],

  setup(props, { emit }) {
    const removeBook = () => {
      emit('remove', props.book.id)
    }
    return {
      formatDate,
      removeBook,
    }
  }
}
</script>

<style scoped>
.default-image {
  opacity: 0.2;
}

.actions {
  gap: 0.5rem;
}
</style>