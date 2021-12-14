import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken') || ''}`
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
export default axios
