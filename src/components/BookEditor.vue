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
      <VCol cols="12" sm="6" md="3">
        <UiNumeric v-model="book.pageCount" label="Количество страниц" min="1" max="10000" required />
      </VCol>
      <VCol cols="12" sm="6" md="3">
        <VFileInput v-model="book.image" label="Загрузить изображение" accept="image/*" :prepend-icon="null" />
      </VCol>
      <VCol align-self="center">
        <VBtn type="submit" color="secondary" class="mb-1 float-right">Сохранить</VBtn>
      </VCol>
    </VRow>

  </VForm>
</template>

<script>
import { ref, toRef } from 'vue'
import { useRouter } from 'vue-router'
import { cloneDeep } from 'lodash'
import UiTextField from '@/components/ui/UiTextField'
import UiDatepicker from '@/components/ui/UiDatepicker'
import UiNumeric from '@/components/ui/UiNumeric'

export default {
  name: 'BookEditor',

  components: {
    UiTextField,
    UiDatepicker,
    UiNumeric,
  },

  props: {
    book: {
      type: Object,
      default: {}
    },
    minYear: Number,
    dateFormat: String
  },

  emits: ['update:book'],

  setup(props, { emit }) {
    const router = useRouter()
    const book = toRef(props, 'book')
    const form = ref(null)

    async function handleSubmit() {
      const isValid = await form.value.validate()

      if (isValid) {
        emit('update:book', cloneDeep(book.value))
        router.push(`/books/${book.value.id}`)
      }
    }

    const minDate = new Date(Date.UTC(props.minYear, 0, 1))
    const currentDate = new Date()

    return {
      form,
      book,
      handleSubmit,
      minDate,
      currentDate
    };
  }
};
</script>