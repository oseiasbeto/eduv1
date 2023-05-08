import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)
const api = Vue.http

api.options.root = 'http://localhost:4040/'

api.headers.common['Authorization'] = "Bearer " + localStorage.getItem("access_token")

export { api }