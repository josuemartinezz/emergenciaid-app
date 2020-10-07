<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}
input {
  background-color: #fff !important;
  border-color: transparent !important;
  outline: 0;
  &:focus {
    background-color: #fff !important;
    border-color: transparent !important;
    outline: 0;
  }
}
.btn {
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);
  }
}
button {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0);
  outline: 0;
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0);
    outline: 0;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
