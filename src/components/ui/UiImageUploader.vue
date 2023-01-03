<template>
  <div class="image-uploader">
    <VFileInput v-model="selectedFile" :label="label" accept="image/*" :prepend-icon="null" class="overflow-hidden"
      :class="isResetClassName" @change="handleChange" />
    <div v-if="preview" class="preview-image">
      <button v-if="image" type="button" class="btn-image" title="Удалить изображение" @click="resetFile">
        <VImg :src="image" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'UiImageUploader',

  props: {
    label: String,
    modelValue: String,
    preview: Boolean,
  },

  emits: ['update:model-value'],

  setup(props, { emit }) {
    const selectedFile = ref([])
    const image = computed(() => props.modelValue)
    const isResetClassName = computed(() => ({ 'is-reset': !image.value }))

    const handleChange = () => {
      const reader = new FileReader()
      const file = selectedFile.value[0]

      reader.readAsDataURL(file)
      reader.onload = () => {
        emit('update:model-value', reader.result)
      }
    }

    const resetFile = () => {
      emit('update:model-value', null)
    }


    return {
      selectedFile,
      handleChange,
      resetFile,
      isResetClassName,
      image
    }
  },
}
</script>

<style scoped>
.image-uploader {
  display: flex;
  gap: 8px;
}

.preview-image {
  width: 64px;
}

.btn-image {
  width: 56px;
  height: 56px;
  opacity: 0.4;
  position: relative;
}

.btn-image::after {
  position: absolute;
  top: 30px;
  right: 5px;
  font-size: 26px;
  line-height: 1;
  content: '×';
}

.is-reset :deep(.v-field__input) {
  font-size: 0;
}
</style>
