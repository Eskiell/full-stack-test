<template>
  <section>
    <GHead></GHead>
    <main class="app app-login p-0">
      <div class="row g-0 app-wellcome-wrapper">
        <div class="col-12 col-md-7 col-lg-6 wellcome-main-col text-center p-5">
          <div class="d-flex flex-column align-content-end">
            <div class="app-wellcome-body mx-auto text-center">
              <div class="app-wellcome-branding mb-4">
                <a class="app-logo" href="/"
                ><img
                  alt="logo"
                  class="logo-icon mr-2"
                  rel="preload"
                  src="@/assets/images/app-logo.png"
                /></a>
              </div>
              <h2 class="wellcome-heading mb-5">
                {{ $t('welcome.title') }}
              </h2>
            </div>
            <router-link :to="{ name: 'routerSignup' }" class="app-link">{{ $t('welcome.signup') }}</router-link>
            <footer class="app-wellcome-footer">
              <GCopyright/>
            </footer>
          </div>
        </div>
        <div class="col-12 col-md-5 col-lg-6 h-100 wellcome-background-col">
          <GBackgroundMask></GBackgroundMask>
        </div>
      </div>
    </main>
  </section>
</template>
<script lang="ts">
import GHead from '@/components/GHead.vue'
import GBackgroundMask from '@/components/GBackgroundMask.vue'
import GCopyright from '@/components/GCopyright.vue'

export default {
  components: {
    GCopyright,
    GBackgroundMask,
    GHead
  }
}
</script>
