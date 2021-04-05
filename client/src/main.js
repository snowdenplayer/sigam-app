import Vue from 'vue'
import App from './App.vue'
import router from './index'
import store from './store'
import axios from 'axios'
import Vuelidate from "vuelidate";

Vue.config.productionTip = false
Vue.prototype.$http = axios
const token = localStorage.getItem("token")
if(token){
  Vue.prototype.$http.default.headers.common['Authorization'] = token
}
Vue.use(Vuelidate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
