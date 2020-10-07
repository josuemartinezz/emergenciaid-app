<template>
  <b-container fluid>
    <b-form-input
      type="email"
      v-model="loginData.email"
      placeholder="Email"
    ></b-form-input>
    <b-form-input
      type="password"
      v-model="loginData.password"
      placeholder="Password"
    ></b-form-input>
    <b-button @click="login" block variant="primary">Iniciar sesión</b-button>
  </b-container>
</template>

<style lang="less">
.login {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    login() {
      var formData = this.toFormData(this.loginData);
      axios
        .post(
          this.$store.state.HOME_PATH + "api/app/user.php?action=login",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response.data.status === 1) {
            localStorage.setItem("session", response.data.session);
            this.$router.push("/");
          } else {
          }
        });
    },
    toFormData: function (obj) {
      var form_data = new FormData();
      for (var key in obj) {
        form_data.append(key, obj[key]);
      }
      return form_data;
    },
  },
};
</script>
