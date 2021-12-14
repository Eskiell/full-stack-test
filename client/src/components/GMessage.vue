<template>
  <div v-if="params.length > 0">
    <div v-for="(param,index) in params" :key="index"
         :class="'alert alert-'+param.type" role="alert">
      {{ param.message }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    params: Array
  },
  name: 'GMessage'
})
</script>

<style scoped>

</style>
