<template>
  <button :disabled="spinner" type="submit">
    <div v-if="spinner===true">
      <span aria-hidden="true" class="spinner-border spinner-border-sm" role="status"></span>
      Aguarde...
    </div>
    <div v-else>
      <slot name="default"></slot>
    </div>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseSubmitButton',
  props: {
    spinner: {
      type: [Boolean],
      default: false,
      required: false
    },
    id: {
      type: [String, Number],
      required: false
    }
  }
})
</script>

<style scoped>

</style>
