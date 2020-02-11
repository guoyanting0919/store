import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';
Vue.use(VueAxios, axios);
Vue.use(VueCookies);
Vue.config.productionTip = false;
// set cookies default config
Vue.$cookies.config('1d');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
