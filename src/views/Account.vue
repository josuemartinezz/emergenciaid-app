<template>
  <b-container>
    <b-form-input
      class="textfield tfc-white"
      id="names"
      v-model="info.email"
      type="text"
      disabled
    ></b-form-input>
    <b-form-input
      class="textfield tfc-white"
      id="names"
      v-model="info.telefono"
      type="text"
      disabled
    ></b-form-input>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "api/admin/perfil.php?action=getInfoUser&parameter=" +
            localStorage.getItem("session")
        )
        .then((response) => {
          this.info = response.data.dataset;
        });
    },
  },
};
</script>

<style>
</style>
