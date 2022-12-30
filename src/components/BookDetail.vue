<template>
  <VCard class="pa-5 pb-3">
    <VRow>
      <VCol cols="3">
        <VImg v-if="image" :src="image" />
        <VImg v-else src="@/assets/images/book-default.svg" class="default-image" />
      </VCol>
      <VCol class="text-left">
        <VCardTitle>
          {{ title }}
        </VCardTitle>
        <VTable>
          <tbody>
            <tr>
              <td>Автор</td>
              <td>{{ authorFirstName }} {{ authorLastName }}</td>
            </tr>
            <tr>
              <td>Количество страниц</td>
              <td>{{ pageCount }}</td>
            </tr>
            <tr v-if="publisherName">
              <td>Издательство</td>
              <td>{{ publisherName }}</td>
            </tr>
            <tr v-if="publishingYear">
              <td>Год издания</td>
              <td>{{ publishingYear }}</td>
            </tr>
            <tr v-if="releaseDate">
              <td>Дата выхода в тираж</td>
              <td>{{ formatDate(releaseDate) }}</td>
            </tr>
          </tbody>
        </VTable>
      </VCol>
    </VRow>
    <VCardActions v-if="detailId" class="actions d-flex justify-end">
      <RouterLink :to="`${detailId}/edit`">
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
import { toRef, toRefs } from 'vue'
import { formatDate } from '@/utils/DateParser'

export default {
  name: 'BookDetail',

  props: {
    book: {
      type: Object,
      required: true
    },
    detailId: [Number, String],
  },

  emits: ['remove'],

  setup(props, { emit }) {
    const detailId = toRef(props, 'detailId')

    const removeBook = () => {
      emit('remove', detailId.value)
    }
    return {
      detailId,
      formatDate,
      removeBook,
      ...toRefs(props.book)
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