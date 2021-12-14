<template>
  <section>
    <div class="auth-background-holder"></div>
    <div class="auth-background-mask"></div>
    <div class="auth-background-overlay p-3 p-lg-5">
      <div class="d-flex flex-column align-content-end h-100">
        <div class="h-100"></div>
        <div class="overlay-content p-3 p-lg-4 rounded">
          <h5 class="mb-3 overlay-title">
            {{ $t('login.textA') }}
          </h5>
          <div>
            {{ $t('login.textB') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GBackgroundMask'
}
</script>

<style scoped>

</style>
