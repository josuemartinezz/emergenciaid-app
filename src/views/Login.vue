<template>
  <b-container fluid class="mh-100 h-100">
    <b-row class="mx-1">
      <b-col cols="12" class="my-4">
        <b-img class :src="img()" alt="Emergencia.id"></b-img>
      </b-col>
    </b-row>
    <b-row class="mx-1 h-75">
      <b-col cols="12" align-self="center" class="mt-n5">
        <h1 class="font-title text-main">Iniciar sesión</h1>
        <p class="mt-2 mb-4">Ingresa tus credenciales para continuar.</p>
        <b-form @submit="login" autocomplete="false">
          <b-form-group
            id="form-data"
            label="Correo electrónico"
            label-for="email"
            label-class="text-help"
            :invalid-feedback="validateEmail"
            :valid-feedback="validateEmail"
            :state="state"
          >
            <b-form-input
              class="textfield"
              id="email"
              v-model="loginData.email"
              type="email"
              :state="state"
              trim
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="Contraseña"
            label-class="text-help"
            label-for="input-1"
          >
            <b-form-input
              class="textfield"
              id="password"
              type="password"
              v-model="loginData.password"
              required
            ></b-form-input>
          </b-form-group>
          <b-col class="text-center mt-4">
            <b-button type="submit" class="button">{{loginButton}}</b-button>
          </b-col>
        </b-form>
      </b-col>
    </b-row>
    <b-alert
      :show="cuentaAlerta"
      class="position-fixed fixed-bottom m-0 rounded-0 text-center"
      style="z-index: 2000;"
      fade
      variant="danger"
      @dismiss-count-down="countDownChanged"
    >{{loginError}}.</b-alert>
  </b-container>
</template>

<style lang="less">
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: process.env,
      loginData: {
        email: "",
        password: ""
      },
      state: false,
      loginButton: "Acceder",
      cuentaAlerta: 0,
      segundosRestantes: 5,
      loginError: ""
    };
  },
  computed: {
    validateEmail() {
      const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.loginData.email && !(this.loginData.email === "")) {
        if (regEx.test(this.loginData.email)) {
          this.state = true;
          return "El correo es válido.";
        } else {
          this.state = false;
          return "Ingrese un correo electrónico válido.";
        }
      } else {
        this.state = false;
        return "Por favor rellena el campo.";
      }
    }
  },
  methods: {
    countDownChanged(cuentaAlerta) {
      this.cuentaAlerta = cuentaAlerta;
    },
    showAlert() {
      this.cuentaAlerta = this.segundosRestantes;
    },
    img() {
      return process.env.VUE_APP_BASE_URL + "resources/images/for-light-bg.svg";
    },
    login(evt) {
      evt.preventDefault();
      var formData = this.toFormData(this.loginData);
      this.loginButton = "Accediendo...";
      axios
        .post(
          process.env.VUE_APP_BASE_URL + "api/app/user.php?action=login",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          this.loginButton = "Acceder";
          if (response.data.status === 1) {
            localStorage.setItem("session", response.data.session);
            this.$router.push("/");
          } else {
            this.loginError = response.data.exception;
            this.showAlert();
          }
        });
    },
    toFormData: function(obj) {
      var form_data = new FormData();
      for (var key in obj) {
        form_data.append(key, obj[key]);
      }
      return form_data;
    }
  }
};
</script>
