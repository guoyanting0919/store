import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Store from '../views/Store.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = new VueRouter({
  routes
});

export default router;
