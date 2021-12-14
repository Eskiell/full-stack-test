<template>
  <section>
    <GHead></GHead>
    <main class="app app-privacy p-0">
      <div class="row g-0 app-privacy-wrapper">
        <div class="col-12 privacy-main-col text-center p-5">
          <div class="d-flex flex-column align-content-end">
            <div class="app-privacy-body mx-auto">
              <div class="app-privacy-branding mb-4">
                <a class="app-logo" href="/"
                ><img
                  alt="logo"
                  class="logo-icon mr-2"
                  rel="preload"
                  src="@/assets/images/app-logo.png"
                /></a>
              </div>
              <div class="privacy">
                <GPrivacyPolicy></GPrivacyPolicy>
              </div>
            </div>
            <footer class="app-auth-footer">
              <GCopyright></GCopyright>
            </footer>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
<script>
import GCopyright from '@/components/GCopyright.vue'
import GPrivacyPolicy from '@/components/GPrivacyPolicy.vue'
import GHead from '@/components/GHead.vue'

export default {
  components: {
    GHead,
    GPrivacyPolicy,
    GCopyright
  }
}
</script>
