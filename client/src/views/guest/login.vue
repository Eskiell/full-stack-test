<template>
  <section>
    <GHead></GHead>
    <main class="app app-login p-0">
      <div class="row g-0 app-auth-wrapper">
        <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div class="d-flex flex-column align-content-end">
            <div class="app-auth-body mx-auto">
              <div class="app-auth-branding mb-4">
                <a class="app-logo" href="/"
                ><img
                  alt="logo"
                  class="logo-icon mr-2"
                  rel="preload"
                  src="@/assets/images/app-logo.png"
                /></a>
              </div>
              <h2 class="auth-heading text-center mb-5">
                {{ $t('login.title') }}
              </h2>
              <div v-if="messages.length > 0" class="errors">
                <GMessage :params="messages"></GMessage>
              </div>
              <div class="auth-form-container text-left">
                <form class="auth-form login-form" @submit.prevent="onSubmit">
                  <div class="email mb-3">
                    <label class="sr-only" for="signin-email">
                      {{ $t('login.access') }}</label
                    >
                    <input
                      id="signin-email"
                      v-model="form.email"
                      class="form-control signin-email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      type="email"
                    />
                  </div>
                  <div class="password mb-3">
                    <label class="sr-only" for="signin-password">
                      {{ $t('login.password') }}</label
                    >
                    <input
                      id="signin-password"
                      v-model="form.password"
                      class="form-control signin-password"
                      name="user[password]"
                      placeholder="Password"
                      required="required"
                      type="password"
                    />
                    <div class="extra mt-3 row justify-content-between">
                      <div class="col-6">
                        <div class="form-check">
                          <input
                            id="rememberPassword"
                            v-model="form.remember"
                            class="form-check-input"
                            name="user[remember]"
                            type="checkbox"
                          />
                          <label
                            class="form-check-label"
                            for="rememberPassword"
                          >
                            {{ $t('login.remember') }}
                          </label>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="forgot-password text-right">
                          {{ $t('login.lostPassword') }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <BaseSubmitButton :spinner="spinner" class="btn app-btn-primary btn-block theme-btn mx-auto">
                      <template v-slot:default>
                        <span> {{ $t('login.buttonLogin') }}</span>
                      </template>
                    </BaseSubmitButton>
                  </div>
                </form>
                <div class="auth-option text-center pt-5">
                  {{ $t('login.noAccount') }}
                  <router-link
                    :to="{ name: 'routerSignup' }"
                    class="app-link"
                  >{{ $t('login.singup') }}
                  </router-link>
                  .
                </div>
              </div>
            </div>
            <footer class="app-auth-footer">
              <GCopyright></GCopyright>
            </footer>
          </div>
        </div>
        <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <GBackgroundMask></GBackgroundMask>
        </div>
      </div>
    </main>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import BaseSubmitButton from '@/components/BaseSubmitButton.vue'
import GBackgroundMask from '@/components/GBackgroundMask.vue'
import GMessage from '@/components/GMessage.vue'
import GHead from '@/components/GHead.vue'
import GCopyright from '@/components/GCopyright.vue'

export default defineComponent({
  components: {
    GCopyright,
    GHead,
    GMessage,
    GBackgroundMask,
    BaseSubmitButton
  },
  setup () {
    const store = useStore()
    const user = computed(() => store.getters['auth/user'])
    const form = ref<any>({
      email: null,
      password: null,
      remember: false
    })
    return {
      form,
      user
    }
  },
  data () {
    return {
      redirect: '/factory',
      messages: [],
      spinner: false
    }
  },
  mounted () {
    this.redirect = decodeURIComponent(String(this.$route?.query?.redirect || '/factory'))
  },
  methods: {
    onSubmit () {
      const vm = (this as any)
      vm.spinner = true
      this.$store.dispatch('auth/login', vm.form).then(() => {
        vm.$router.push(vm.redirect)
      }).catch((error: any) => {
        vm.messages = [];
        (error?.response?.data?.errors || []).forEach((message: string) => {
          return vm.messages.push({
            type: 'danger',
            message: message
          } as never)
        })
      }).then(function () {
        vm.spinner = false
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.form-check-label {
  cursor: pointer;
}
</style>
