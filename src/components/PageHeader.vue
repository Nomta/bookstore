<template>
  <VToolbar color="secondary">
    <VContainer tag="nav" class="nav d-flex align-center">
      <slot />
    </VContainer>
  </VToolbar>
</template>

<script>

export default {
  name: 'PageHeader',
}
</script>

<style scoped>
.nav {
  gap: 2rem;
}

.nav :slotted(a) {
  font-size: 1.25rem;
  color: white;
}
</style>