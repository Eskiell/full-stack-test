// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Auth from '@/api/Auth'
import axios from 'axios'
import { User } from '@/api/interface/Users'

const MODULE = {
  namespaced: true,
  state: {
    loading: false,
    status: '',
    user: {},
    access_token: null
  },
  mutations: {
    save (state: { [x: string]: unknown }, payload: { key: string | number; value: unknown }): void {
      state[payload.key] = payload.value
    }
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    login ({ commit }: { commit: any }, user: any): Promise<User> {
      return new Promise((resolve, reject) => {
        commit('save', {
          key: 'loading',
          value: true
        })
        new Auth().login(user)
          .then((resp: any) => {
            const token = resp.data.access_token
            const user = resp.data.user
            localStorage.setItem('accessToken', token)
            commit('save', {
              key: 'status',
              value: 'success'
            })
            commit('save', {
              key: 'user',
              value: user
            })
            commit('save', {
              key: 'loading',
              value: false
            })
            commit('save', {
              key: 'access_token',
              value: token
            })
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
            resolve(resp)
          })
          .catch((err: any) => {
            commit('save', {
              key: 'status',
              value: 'error'
            })
            commit('save', {
              key: 'loading',
              value: false
            })
            localStorage.removeItem('accessToken')
            reject(err)
          })
      })
    },
    logout ({ commit }: { commit: any }): void {
      localStorage.removeItem('accessToken')
      commit('save', {
        key: 'user',
        value: {}
      })
      commit('save', {
        key: 'loading',
        value: false
      })
    }
  },
  getters: {
    user: (state: User) => {
      return state
    },
    userToken: (state: User) => {
      return state.user.token
    }
  }
}
export default MODULE
