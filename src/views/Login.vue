<template>
  <div class="login">
    <div class="loginBox">
      <h2>LOGIN</h2>
      <div class="inputBox">
        <label for="userName">Username:</label>
        <input v-model="userName" id="userName" type="text" placeholder="example@gmail.com" />
      </div>
      <div class="inputBox">
        <label for="password">Password:</label>
        <input v-model="password" id="password" type="text" placeholder="●●●●●●●●●" />
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
// @ is an alias to /src

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
      let config = {
        withCredentials: true
      };
      this.$http
        .post(
          "https://aqueous-earth-60961.herokuapp.com/users/login",
          user,
          config
        )
        .then(res => {
          if (res.data.message === "success") {
            // console.log(res);
            vm.$cookies.set("uid", res.data.uid);
            vm.$cookies.set("token", res.data.token);
            vm.$router.push("/home");
          } else {
            if (
              res.data.code === "auth/user-not-found" ||
              "auth/invalid-email"
            ) {
              alert("該帳號尚未註冊");
            } else if (res.data.code === "auth/wrong-password") {
              alert("密碼錯誤!");
            }
          }
        });
    },
    signUpHandler() {
      this.$router.push("/signup");
    }
  }
};
</script>
