<template>
  <VForm ref="form" @submit.prevent="handleSubmit" enter>

    <VRow dense>
      <VCol cols="12">
        <UiTextField v-model="book.title" label="Заголовок" max-length="30" required />
      </VCol>
    </VRow>
    <VRow dense>
      <VCol cols="12" md="6">
        <UiTextField v-model="book.authorFirstName" label="Имя автора" max-length="20" required />
      </VCol>
      <VCol cols="12" md="6">
        <UiTextField v-model="book.authorLastName" label="Фамилия автора" max-length="20" required />
      </VCol>
    </VRow>
    <VRow dense>
      <VCol cols="12" md="6">
        <UiTextField v-model="book.publisherName" label="Название издательства" max-length="30" />
      </VCol>
      <VCol cols="12" sm="6" md="3">
        <UiDatepicker v-model="book.publishingYear" label="Год издания" :min-date="minDate" :max-date="currentDate"
          year-picker />
      </VCol>
      <VCol cols="12" sm="6" md="3">
        <UiDatepicker v-model="book.releaseDate" label="Дата публикации" :min-date="minDate" :max-date="currentDate"
          :format="dateFormat" />
      </VCol>
    </VRow>
    <VRow dense>
      <VCol cols="12" sm="3">
        <UiNumeric v-model="book.pageCount" label="Количество страниц" min="1" max="10000" required />
      </VCol>
      <VCol cols="12" sm="9" md="5">
        <UiImageUploader v-model="book.image" label="Загрузить изображение" :preview="true" />
      </VCol>
      <VCol align-self="center" class="d-flex justify-end">
        <VBtn type="button" color="warning" class="ml-2 mb-1" @click="handleReset">Сбросить</VBtn>
        <VBtn type="submit" color="info" class="ml-2 mb-1">Сохранить</VBtn>
      </VCol>
    </VRow>

  </VForm>
</template>

<script>
import { ref, watch } from 'vue'
import { cloneDeep } from 'lodash'

import UiTextField from '@/components/ui/UiTextField'
import UiDatepicker from '@/components/ui/UiDatepicker'
import UiImageUploader from '@/components/ui/UiImageUploader'
import UiNumeric from '@/components/ui/UiNumeric'

export default {
  name: 'BookEditor',

  components: {
    UiTextField,
    UiDatepicker,
    UiImageUploader,
    UiNumeric,
  },

  props: {
    book: {
      type: Object,
      default: {}
    },
    minYear: Number,
    dateFormat: String,
  },

  emits: ['update:book'],

  setup(props, { emit }) {
    const book = ref({})
    const form = ref(null)

    watch(() => props.book, () => {
      book.value = cloneDeep(props.book)
    }, { immediate: true })

    const handleReset = () => {
      book.value = cloneDeep(props.book)
    }

    const handleSubmit = async () => {
      const isValid = await form.value.validate()

      if (isValid.valid) {
        emit('update:book', book.value)
      }
    }

    const minDate = new Date(Date.UTC(props.minYear, 0, 1))
    const currentDate = new Date()

    return {
      form,
      book,
      handleSubmit,
      handleReset,
      minDate,
      currentDate,
    }
  }
}
</script>