<template>
  <PageHeader>
    <router-link :to="{ name: 'books' }">Каталог</router-link>
    <router-link :to="{ name: 'createBook' }">Добавить книгу</router-link>
  </PageHeader>
  <PageLayout>
    <router-view />
  </PageLayout>
</template>

<script>
import { useInitialStore } from '@/composables/useInitialStore'
import PageHeader from '@/components/PageHeader'
import PageLayout from '@/components/PageLayout'

export default {
  name: 'App',

  components: {
    PageHeader,
    PageLayout,
  },

  setup() {
    useInitialStore()
  },
}
</script>