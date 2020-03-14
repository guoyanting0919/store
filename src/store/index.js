import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueCookies from 'vue-cookies';
import router from '../router';

Vue.use(Vuex);
Vue.use(VueCookies);

export default new Vuex.Store({
  strict: true,
  state: {
    token: VueCookies.get('token'),
    uid: VueCookies.get('uid'),
    products: '',
    isLoading: false,
    category: '所有餐點',
    userFavorite: '',
    productsFilter: ''
  },
  actions: {
    //loading
    loadingHandler(context, payload) {
      context.commit('LOADING', payload);
    },
    // admin
    getProducts(context) {
      context.commit('LOADING', true);
      let api = `${process.env.VUE_APP_API}products/products`;
      axios.get(api).then(res => {
        context.commit('PRODUCTS', res.data);
        context.commit('LOADING', false);
      });
    },
    deleteProduct(context, { key, name }) {
      let id = key;
      let api = `${process.env.VUE_APP_API}admin/deleteProduct/${id}`;
      let user = {
        token: context.state.token
      };
      let r = confirm(`確認刪除${name}?`);
      if (r) {
        axios.post(api, user).then(res => {
          context.dispatch('getProducts');
        });
      } else {
        alert('已取消');
      }
    },
    addProduct(context, payload) {
      let config = {
        withCredentials: true
      };
      let api = `${process.env.VUE_APP_API}admin/addProduct`;
      axios.post(api, payload, config).then(res => {
        if (res.data.success) {
          context.dispatch('getProducts');
        } else {
          alert('添加產品失敗');
        }
      });
    },
    updateProduct(context, payload) {
      let api = `${process.env.VUE_APP_API}admin/updateProduct`;
      axios.post(api, payload).then(res => {
        if (res.data === 'success') {
          context.dispatch('getProducts');
        }
      });
    },
    loginHandler(context, payload) {
      let config = {
        withCredentials: true
      };
      let api = `${process.env.VUE_APP_API}users/login`;
      axios.post(api, payload, config).then(res => {
        if (res.data.message === 'success') {
          // console.log(res);
          VueCookies.set('uid', res.data.uid);
          VueCookies.set('token', res.data.token);
          router.push('/home');
        } else {
          if (res.data.code === 'auth/user-not-found' || 'auth/invalid-email') {
            alert('該帳號尚未註冊');
          } else if (res.data.code === 'auth/wrong-password') {
            alert('密碼錯誤!');
          }
        }
      });
    },
    signupHandler(context, payload) {
      let api = `${process.env.VUE_APP_API}users/signup`;
      axios.post(api, payload).then(res => {
        if (res.data.message === 'success') {
          alert(res.data.message2);
          router.push('/login');
        } else {
          if (res.data.code === 'auth/weak-password') {
            alert('密碼最少由6個字母或數字組成');
          } else if (res.data.code === 'auth/invalid-email') {
            alert('請檢查郵件帳號是否輸入正確');
          }
        }
      });
    },
    // store
    categoryHandler(context, payload) {
      context.commit('CATEGORY', payload);
    },
    getFavorites(context, payload) {
      let uid = context.state.uid;
      if (uid) {
        let api = `${process.env.VUE_APP_API}favorite/getUserFavorites/${uid}`;
        axios.get(api).then(res => {
          context.commit('USER_FAVORITE', res.data);
        });
      } else {
        return false;
      }
    },
    setProductFilter(context, payload) {
      context.commit('PRODUCTS_FILTER', payload);
    }
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    CATEGORY(state, payload) {
      state.category = payload;
    },
    USER_FAVORITE(state, payload) {
      state.userFavorite = payload;
    },
    PRODUCTS_FILTER(state, payload) {
      let arryProducts = Object.values(state.products);
      let data;
      let category = state.category;
      if (category === '所有餐點') {
        data = arryProducts;
      } else {
        data = arryProducts.filter(product => {
          return product.category === category;
        });
      }
      data.reverse();
      state.productsFilter = data;
    }
  },
  modules: {}
});
