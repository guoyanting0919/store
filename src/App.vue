<template>
  <div id="app">
    <!-- navBar -->
    <div class="navBar">
      <div class="logo">
        <h3 class="navLogo">美食˙公道婆</h3>
      </div>
      <div class="responsiveLists" :class="{'show':this.listShow}">
        <router-link class="responsiveList" @click.native="listShow=false" to="/home">
          <i class="fas fa-home"></i>
          <span class="navBarItem">首頁</span>
        </router-link>
        <router-link class="responsiveList" @click.native="listShow=false" to="/about">
          <i class="fas fa-address-card"></i>
          <span class="navBarItem">關於我們</span>
        </router-link>
        <router-link class="responsiveList" @click.native="listShow=false" to="/store">
          <i class="fas fa-shopping-cart"></i>
          <span class="navBarItem">美食街</span>
        </router-link>
        <router-link class="responsiveList" @click.native="listShow=false" to="/contact">
          <i class="far fa-envelope"></i>
          <span class="navBarItem">聯絡我們</span>
        </router-link>
      </div>
      <ul class="navLists">
        <div class="burger">
          <i @click="listShow=!listShow" class="fas fa-bars"></i>
        </div>
        <router-link class="navList" to="/home">
          <i class="fas fa-home"></i>
          <span class="navBarItem">首頁</span>
        </router-link>
        <router-link class="navList" to="/about">
          <i class="fas fa-address-card"></i>
          <span class="navBarItem">關於我們</span>
        </router-link>
        <router-link class="navList" to="/store">
          <i class="fas fa-shopping-cart"></i>
          <span class="navBarItem">美食街</span>
        </router-link>
        <router-link class="navList" to="/contact">
          <i class="far fa-envelope"></i>
          <span class="navBarItem">聯絡我們</span>
        </router-link>
      </ul>
      <div class="loginBox">
        <div>
          <button class="memberBtn" v-if="this.$cookies.isKey('uid')" @click="logOutHandler">
            <i class="fas fa-user isLogin"></i>
            <span class="isLoginSpan">會員登出</span>
          </button>
          <button class="memberBtn isNotLoginBtn" v-else @click="signInHandler">
            <i class="fas fa-user isNotLogin"></i>
            <span class="isNotLoginSpan">登入/註冊</span>
          </button>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      listShow: false
    };
  },
  methods: {
    logOutHandler() {
      this.$cookies.remove("uid");
      this.$cookies.remove("token");
      this.$router.push("/login");
    },
    signInHandler() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@import "./assets/all.scss";
</style>
