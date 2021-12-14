<template>
  <section>
    <main class="app app-signup p-0">
      <div class="row g-0 app-auth-wrapper">
        <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div class="d-flex flex-column align-content-end">
            <div class="app-auth-body mx-auto">
              <div class="app-auth-branding mb-4">
                <a class="app-logo" href="/"
                ><img
                  alt="logo"
                  class="logo-icon mr-2"
                  src="@/assets/images/app-logo.png"
                /></a>
              </div>
              <h2 class="auth-heading text-center mb-4">
                {{ $t('singup.title') }}
              </h2>

              <div v-if="messages.length > 0" class="info">
                <GMessage :params="messages"></GMessage>
              </div>
              <div class="auth-form-container text-left mx-auto">
                <form class="auth-form auth-signup-form" @submit.prevent="onSubmit">
                  <div class="email mb-3">
                    <label class="sr-only" for="signup-email">{{
                        $t('singup.name')
                      }}</label>
                    <input
                      id="signup-name"
                      v-model="form.name"
                      :placeholder="$t('singup.name')"
                      class="form-control signup-name"
                      name="signup-name"
                      required="required"
                      type="text"
                    />
                  </div>
                  <div class="email mb-3">
                    <label class="sr-only" for="signup-email">{{
                        $t('singup.email')
                      }}</label>
                    <input
                      id="signup-email"
                      v-model="form.email"
                      :placeholder="$t('singup.email')"
                      class="form-control signup-email"
                      name="signup-email"
                      required="required"
                      type="email"
                    />
                  </div>
                  <div class="password mb-3">
                    <label class="sr-only" for="signup-password">{{
                        $t('singup.password')
                      }}</label>
                    <input
                      id="signup-password"
                      v-model="form.password"
                      :placeholder="$t('singup.password')"
                      class="form-control signup-password"
                      name="signup-password"
                      required="required"
                      type="password"
                    />
                  </div>
                  <div class="extra mb-3">
                    <div class="form-check">
                      <input
                        id="singupAgree"
                        v-model="form.agree"
                        class="form-check-input"
                        required="required"
                        type="checkbox"
                      />
                      <label class="form-check-label" for="singupAgree">
                        {{ $t('singup.agree') }}
                        <a
                          class="app-link"
                          href="/terms-of-service"
                          target="_blank"
                        >{{ $t('singup.termsService') }}</a
                        >
                        {{ $t('singup.prepositionAnd') }}
                        <a
                          class="app-link"
                          href="/privacy-policy"
                          target="_blank"
                        >{{ $t('singup.PrivacyPolicy') }}</a
                        >.
                      </label>
                    </div>
                  </div>

                  <div class="text-center">
                    <BaseSubmitButton :spinner="spinner" class="btn app-btn-primary btn-block theme-btn mx-auto">
                      <template v-slot:default>
                        <span> {{ $t('singup.buttonSignup') }}</span>
                      </template>
                    </BaseSubmitButton>
                  </div>
                </form>
                <div class="auth-option text-center pt-5">
                  {{ $t('singup.haveAccount') }}

                  <router-link :to="{ name: 'routerLogin' }" class="text-link">
                    {{ $t('singup.login') }}
                  </router-link
                  >
                </div>
              </div>
            </div>
            <footer class="app-auth-footer">
              <base-copyright/>
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
import BaseCopyright from '@/components/GCopyright.vue'
import { defineComponent, ref } from 'vue'
import Auth from '@/api/Auth'
import BaseSubmitButton from '@/components/BaseSubmitButton.vue'
import GBackgroundMask from '@/components/GBackgroundMask.vue'
import GMessage from '@/components/GMessage.vue'

const auth = new Auth()
export default defineComponent({
  components: {
    GMessage,
    GBackgroundMask,
    BaseSubmitButton,
    BaseCopyright
  },
  setup () {
    const form = ref<any>({
      name: null,
      email: null,
      password: null,
      agree: false
    })
    return {
      form
    }
  },
  data () {
    return {
      redirect: '/',
      messages: [],
      spinner: false
    }
  },
  mounted () {
    this.redirect = decodeURIComponent(String(this.$route?.query?.redirect || '/login'))
  },
  methods: {
    onSubmit () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this
      vm.spinner = true
      auth.register(vm.form).then(() => {
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
