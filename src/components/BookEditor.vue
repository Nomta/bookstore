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
      <VCol align-self="center">
        <VBtn type="submit" color="secondary" class="mb-1 float-right">Сохранить</VBtn>
      </VCol>
    </VRow>

  </VForm>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { cloneDeep } from 'lodash'
import UiTextField from '@/components/ui/UiTextField'
import UiDatepicker from '@/components/ui/UiDatepicker'
import UiImageUploader from '@/components/ui/UiImageUploader'
import UiNumeric from '@/components/ui/UiNumeric'
import { useWatchEffect } from '@/composables/useWatchEffect'

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
    dateFormat: String
  },

  emits: ['update:book'],

  setup(props, { emit }) {
    const router = useRouter()
    const book = ref({})
    const form = ref(null)

    const useEffect = useWatchEffect(props, 'book')

    useEffect(() => {
      book.value = cloneDeep(props.book)
    })

    async function handleSubmit() {
      const isValid = await form.value.validate()

      if (isValid.valid) {
        emit('update:book', book.value)
        router.push({ name: 'book', params: { id: book.value.id } })
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