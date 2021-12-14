import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/module/auth'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: auth
  },
  plugins: [createPersistedState()]
})
