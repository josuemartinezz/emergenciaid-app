<template>
  <div id="app" class="app-height" :class="(currentRouteName === 'Login') ? 'bg-white': 'bgc-gray'">
    <b-navbar
      class="py-4 navbar-shadow w-100 bg-white"
      v-show="!(currentRouteName == 'Qrcode' || currentRouteName === 'Viewprofile' || currentRouteName === 'Search')"
    >
      <b-img class="logo" :src="logo" alt="Emergencia.id" fluid></b-img>
      <b-navbar-nav class="ml-auto" v-show="$store.state.user.authenticated">
        <b-button size="sm" class="m-0" pill variant="light" to="/search">
          <b-icon-search></b-icon-search>
          <p class="d-inline-block p-0 ml-2 my-0">Buscar</p>
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <b-container
      class="fixed-bottom bg-white bottombar-shadow"
      v-show="$store.state.user.authenticated  && !(currentRouteName === 'Qrcode' || currentRouteName === 'Viewprofile' || currentRouteName === 'Search')"
    >
      <b-row align-v="center" align-h="around">
        <b-col class="p-0">
          <b-button
            block
            variant="link"
            :class="(currentRouteName == 'Home') ? 'btn-active left' : ''"
            to="/dashboard"
            class="text-regular"
          >
            <b-icon-house :class="currentRouteName == 'Home' ? 'is-3': 'is-1'"></b-icon-house>
            <p v-show="currentRouteName != 'Home'" class="p-0 my-0">Recientes</p>
          </b-button>
        </b-col>
        <b-col class="p-0">
          <b-button
            block
            variant="link"
            to="/scan"
            :class="(currentRouteName == 'Qrcode') ? 'btn-active' : ''"
            class="text-regular"
          >
            <b-icon-upc-scan :class="currentRouteName == 'Qrcode' ? 'is-3': 'is-1'"></b-icon-upc-scan>
            <p v-show="currentRouteName != 'Qrcode'" class="p-0 my-0">Escanear</p>
          </b-button>
        </b-col>
        <b-col class="p-0">
          <b-button
            block
            variant="link"
            to="/account"
            :class="(currentRouteName == 'Account') ? 'btn-active right' : ''"
            class="text-regular"
          >
            <b-icon-people :class="currentRouteName == 'Account' ? 'is-3': 'is-1'"></b-icon-people>
            <p v-show="currentRouteName != 'Account'" class="p-0 my-0">Cuenta</p>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "plantilla",
  data() {
    return {
      logo: require("@/assets/for-light-bg.png")
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  mounted() {
    console.log(this.currentRouteName);
    this.getSession();
  },
  methods: {
    ...mapMutations(["getSession"])
  }
};
</script>

<style lang="less">
.is-3 {
  font-size: 200% !important;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.is-1 {
  font-size: 150% !important;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
* {
  margin: 0px;
  padding: 0px;
}
.bottombar-shadow {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  -webkit-box-shadow: 0px -14px 36px -5px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px -14px 36px -5px rgba(0, 0, 0, 0.11);
  box-shadow: 0px -14px 36px -5px rgba(0, 0, 0, 0.11);
}
.navbar-shadow {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  -webkit-box-shadow: 0px 14px 36px -5px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 14px 36px -5px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 14px 36px -5px rgba(0, 0, 0, 0.11);
}
.bgc-gray {
  background-color: #f2f5fa !important;
}
.logo.img-fluid {
  height: 30px;
}
.app-height {
  height: 100vh;
}
.fixed-height {
  height: calc(100% - 141px);
}
.text-help {
  color: #98a1b3;
  font-size: 16px;
  margin-bottom: 6px;
}
.text-regular {
  color: black;
}
.font-title {
  font-weight: 700;
}
.text-main {
  color: #2196f3 !important;
}
.form-control.textfield {
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  display: block;
  caret-color: rgb(33, 150, 243);
  background-color: rgb(242, 245, 250);
  color: rgb(38, 43, 51);
  pointer-events: unset;
  border-radius: 3px;
  outline: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  transition: color 0.1s ease 0s;
  border-bottom: 2px solid rgb(242, 245, 250);
  font-size: inherit;
  &:focus {
    background-color: rgb(242, 245, 250);
    box-shadow: inherit;
    animation-duration: 0.5s;
    animation-name: slidein;
    border-bottom: 2px solid rgb(33, 150, 243);
  }
  &:disabled {
    color: #999999;
    background-color: rgb(242, 245, 250);
    opacity: 1;
    &.filled {
      border-bottom: 2px solid rgb(33, 150, 243);
    }
  }
  &.is-valid:focus {
    border-bottom: 2px solid #28a745;
  }
  &.is-invalid:focus {
    border-bottom: 2px solid #dc3545;
  }
  &.tfc-white {
    background-color: white;
  }
}
button {
  box-shadow: unset;
  outline: 0;
  &:focus {
    box-shadow: unset;
    outline: 0;
  }
}
.btn-secondary.button {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  display: inline-block;
  -webkit-appearance: none;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(33, 150, 243);
  cursor: pointer;
  user-select: none;
  pointer-events: auto;
  outline: none;
  padding: 14px 24px;
  border-radius: 4px;
  transition: background-color 0.1s ease 0s, box-shadow 0.1s ease 0s;
  border-width: 0px;
}
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary,
.btn.btn-secondary {
  outline: none;
  text-decoration: none;
  box-shadow: unset;
  &:hover,
  &:active,
  &:focus {
    outline: none;
    text-decoration: none;
    box-shadow: unset;
  }

  &:active:focus {
    background-color: #f2f5fa;
    color: #999999;
  }

  &.dropdown-gray {
    background-color: #f2f5fa;
    border: unset;
    color: #999999;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 3px;
    border-bottom: 2px solid rgb(33, 150, 243);
    -webkit-transition: background 1s 0s linear;
    -moz-transition: background 1s 0s linear;
    -o-transition: background 1s 0s linear;
    transition: background 1s 0s linear;

    &.disabled {
      border-radius: 0px;
      border-bottom: unset;
    }

    &.not-collapsed {
      border-bottom: unset;
    }
  }
}
.btn .bottombar-shadow .btn-link {
  -webkit-transition: background 0.5s 0s linear;
  -moz-transition: background 0.5s 0s linear;
  -o-transition: background 0.5s 0s linear;
  transition: background 0.5s 0s linear;
  &:focus,
  &:hover {
    box-shadow: unset;
    text-decoration: none;
  }
}
.collapse.show {
  border-radius: 3px;
  border-bottom: 2px solid rgb(33, 150, 243);
}
.bottombar-shadow .btn-link.btn-active {
  color: white;
  background-color: #dcdcdc;
  -webkit-transition: background 0.5s 0s linear;
  -moz-transition: background 0.5s 0s linear;
  -o-transition: background 0.5s 0s linear;
  transition: background 0.5s 0s linear;
  &:focus,
  &:hover {
    box-shadow: unset;
    text-decoration: none;
  }
}
.btn-active {
  &.left {
    border-top-left-radius: 20px;
  }
  &.right {
    border-top-right-radius: 20px;
  }
}
.btn {
  &:focus {
    box-shadow: unset;
  }
}
a.btn.btn-link {
  color: rgb(33, 150, 243);
}
.text_secondary {
  font-size: 18px;
  line-height: 22px;
  color: #98a1b3;
}
@media only screen and (height: 640px) {
  .text_secondary {
    line-height: 17px;
    font-size: 16px;
  }
}
#app {
  font-family: "TTCommons", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 19px;
  color: #262b33;
  font-weight: 400;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
