<template>
  <div class="login">
    <div class="loginBox">
      <h2>LOGIN</h2>
      <div class="inputBox">
        <label for="userName">Username:</label>
        <input
          autocomplete="off"
          v-model="userName"
          id="userName"
          type="text"
          placeholder="example@gmail.com"
        />
      </div>
      <div class="inputBox">
        <label for="password">Password:</label>
        <input
          autocomplete="off"
          v-model="password"
          id="password"
          type="password"
          placeholder="●●●●●●●●●"
        />
      </div>
      <button class="loginHandler" @click="loginHandler">Sign in</button>
      <p class="signUpTxt">
        You don't have account?
        <br />Please
        <a @click.prevent="signUpHandler" href="#">Sign up</a>!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    loginHandler() {
      const vm = this;
      let userName = vm.userName;
      let password = vm.password;
      let user = {
        userName,
        password
      };
      vm.$store.dispatch("loginHandler", user);
    },
    signUpHandler() {
      this.$router.push("/signup");
    }
  }
};
</script>
