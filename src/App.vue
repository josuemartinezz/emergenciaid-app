<template>
  <div id="app" style="height: 100vh">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}
.text-help {
  color: #98a1b3;
  font-size: 16px;
  margin-bottom: 6px;
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
}
.form-control:focus.textfield:focus {
  background-color: rgb(242, 245, 250);
  box-shadow: inherit;
  animation-duration: 0.5s;
  animation-name: slidein;
  border-bottom: 2px solid rgb(33, 150, 243);
}
.form-control:focus.textfield:focus.is-valid:focus {
  border-bottom: 2px solid #28a745;
}
.form-control:focus.textfield:focus.is-invalid:focus {
  border-bottom: 2px solid #dc3545;
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
.btn:hover.button:hover.btn-secondary:hover,
.btn:active.button:active.btn-secondary:active,
.btn:focus.button:focus.btn-secondary:focus {
  outline: none;
  background-color: #168ae6;
  border-color: #168ae6;
  color: #fff;
  text-decoration: none;
  box-shadow: unset;
}
.btn {
  &:focus {
    box-shadow: unset;
  }
}
#app {
  font-family: "TTCommons", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 19px;
  line-height: 24px;
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
