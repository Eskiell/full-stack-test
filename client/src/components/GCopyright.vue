<template>
  <div class="container text-center py-3">
    <small class="copyright">Eskiel tecnologia</small>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GCopyright',
  props: {
    msg: String
  }
})
</script>
