import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from "./http"
import store from './store'

Vue.config.productionTip = false

//adiciona a config do axios no vue e assim não preciso importar http em todo arquivo que usar
//to criando uma propriedade global (tipo $router que é padrão do vue)
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
