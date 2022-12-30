<template>
  <VApp>
    <VContainer>
      <BooksCatalog />
    </VContainer>
  </VApp>
</template>

<script>
import BooksCatalog from '@/components/BooksCatalog'

export default {
  name: 'BooksView',

  components: {
    BooksCatalog,
  },
}
</script>
