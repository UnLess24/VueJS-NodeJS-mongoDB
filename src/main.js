import Vue from 'vue';
import router from './router/index';

import VueAxios from 'vue-axios';
import axios from 'axios'
Vue.use(VueAxios, axios);

import App from './App.vue';

//import 'bootstrap/dist/css/bootstrap.css';

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<div><App /></div>',
});
