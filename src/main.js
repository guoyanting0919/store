import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(VueAxios, axios);
Vue.use(VueCookies);
Vue.use(VueLoading, {
  canCancel: false,
  color: '#000000',
  loader: 'bars', //spinner/dots/bars
  width: 50,
  height: 50,
  backgroundColor: '#ffffff',
  isFullPage: true,
  opacity: 0.8
});
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
// set cookies default config
Vue.$cookies.config('1d');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
