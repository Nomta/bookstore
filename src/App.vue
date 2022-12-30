<template>
  <PageHeader>
    <router-link to="/books">Каталог</router-link>
    <router-link to="/books/create">Добавить книгу</router-link>
  </PageHeader>
  <router-view />
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import PageHeader from '@/components/PageHeader'

export default {
  name: 'App',

  components: {
    PageHeader,
  },

  setup() {
    const store = useStore()

    onMounted(() => store.dispatch('books/getAllBooks'))
  },
}
</script>