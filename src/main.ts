import Vue from "vue"

// VueMoment
import VueMoment from "vue-moment"
import "moment/locale/ru"

// Bootstrap
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from "./store"
import router from "./router"

import App from "./App.vue";

// Vue initialization
Vue.use(VueMoment)
Vue.use(BootstrapVue)

new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App },
});
