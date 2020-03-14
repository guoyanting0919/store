<template>
  <div class="signup">
    <div class="signupBox">
      <h2>SIGNUP</h2>
      <div class="inputBox">
        <label for="userName">Username:</label>
        <input
          v-model="userName"
          id="userName"
          type="text"
          placeholder="Please enter your e-mail account"
          autocomplete="off"
        />
      </div>
      <div class="inputBox">
        <label for="password">Password:</label>
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="●●●●●●●●●"
          autocomplete="off"
        />
      </div>
      <button class="signupHandler" @click="signupHandler">Sign up</button>
      <p class="logInTxt">
        You already have an account?
        <br />Please
        <a @click.prevent="logInHandler" href="#">Login</a>!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    signupHandler() {
      const vm = this;
      let password = vm.password;
      let userName = vm.userName;
      let user = {
        password,
        userName
      };
      vm.$store.dispatch("signupHandler", user);
    },
    logInHandler() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>