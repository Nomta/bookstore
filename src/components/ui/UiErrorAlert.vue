<template>
  <div class="error">
    <slot>
      <p>Что-то пошло не так...</p>
      <p>Попробуйте перезагрузить страницу</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'UiErrorAlert',
}
</script>

<style scoped>
.error {
  padding-top: 25vh;
  font-size: 2.5rem;
  text-align: center;
}
</style>