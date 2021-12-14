<template>
  <div class="app-wrapper">
    <GHead></GHead>
    <div class="app-content pt-3 p-md-3 p-lg-4">
      <footer class="app-footer">
        <div class="container text-center py-3">
          <GCopyright></GCopyright>
        </div>
      </footer>
      <!--//app-footer-->
    </div>
  </div>
  <!--//app-wrapper-->
</template>

<script>
import GCopyright from '@/components/GCopyright'
import GHead from '@/components/GHead'

export default {
  name: 'main',
  components: {
    GHead,
    GCopyright
  }
}
</script>

<style scoped>

</style>
