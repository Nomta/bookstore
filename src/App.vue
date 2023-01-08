<template>
  <PageHeader>
    <router-link :to="{ name: 'books' }">Каталог</router-link>
    <router-link :to="{ name: 'createBook' }">Добавить книгу</router-link>
  </PageHeader>
  <router-view />
</template>

<script>
import { useInitialStore } from '@/composables/useInitialStore'
import PageHeader from '@/components/PageHeader'

export default {
  name: 'App',

  components: {
    PageHeader,
  },

  setup() {
    useInitialStore()
  },
}
</script>