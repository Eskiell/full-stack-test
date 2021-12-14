<template>
  <section>
    <GHead></GHead>
    <main class="app app-term-of-service p-0">
      <div class="row g-0 app-privacy-wrapper">
        <div class="col-12 term-of-service-main-col text-center p-5">
          <div class="d-flex flex-column align-content-end">
            <div class="app-term-of-service-body mx-auto">
              <div class="app-term-of-service-branding mb-4">
                <a class="app-logo" href="/"
                ><img
                  alt="logo"
                  class="logo-icon mr-2"
                  rel="preload"
                  src="@/assets/images/app-logo.png"
                /></a>
              </div>
              <div class="privacy">
                <GTermOfService></GTermOfService>
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

import GHead from '@/components/GHead'
import GTermOfService from '@/components/GTermOfService'
import GCopyright from '@/components/GCopyright'

export default {
  components: {
    GCopyright,
    GTermOfService,
    GHead
  }
}
</script>
