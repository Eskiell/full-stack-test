import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@/plugins/bootstrap'
import 'es6-promise/auto'

createApp(App).use(i18n).use(i18n).use(store).use(router).mount('#app')
