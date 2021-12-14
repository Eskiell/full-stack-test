<template>
  <section class="app app-404-page">
    <div class="container mb-5">
      <div class="row">
        <div class="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
          <div class="app-branding text-center mb-5">
            <a class="app-logo" href="/"
            ><img
              class="logo-icon mr-2"
              src="@/assets/images/app-logo.png"
              alt="logo"
            /><span class="logo-text">{{ $t('PageNotFound.title') }}</span></a
            >
          </div>
          <div class="app-card p-5 text-center shadow-sm">
            <h1 class="page-title mb-4">
              404<br/><span class="font-weight-light">{{
                $t('PageNotFound.textA')
              }}</span>
            </h1>
            <div class="mb-4">
              {{ $t('PageNotFound.textB') }}
            </div>
            <a class="btn app-btn-primary" href="/">
              {{ $t('PageNotFound.buttonHome') }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <footer class="app-footer">
      <GCopyright/>
    </footer>
  </section>
</template>
<script>

import GCopyright from '@/components/GCopyright'

export default {
  components: { GCopyright }
}
</script>
