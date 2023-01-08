<template>
  <div class="loader my-5">
    <VProgressCircular indeterminate color="secondary" :size="70" :width="8" />
  </div>
</template>

<script>
export default {
  name: 'UiLoader',
}
</script>

<style scoped>
.loader {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>