<template>
  <b-container
    fluid
    class="bgc-gray p-0"
    :class="
      $route.matched.some(({ name }) => name === 'Qrcode')
        ? 'h-100'
        : 'fixed-height'
    "
  >
    <div class="position-fixed px-3 py-3" style="z-index: 999">
      <b-button pill variant="link" to="/dashboard" class="bg-white p-1">
        <b-icon-chevron-left to="/"></b-icon-chevron-left>
        <p class="d-inline-block p-2 my-0">Regresar</p>
      </b-button>
    </div>
    <div v-if="loading" class="loading">
      <p>Cargando...</p>
    </div>
    <div v-if="isShow" class="loading">
      <b-button pill variant="link" class="bg-white p-1" @click="(isShow = false), openSwiper()">
        <p class="d-inline-block p-2 my-0">Escanear otro codigo</p>
      </b-button>
    </div>
    <transition name="slide-fade">
      <Swiper
        :image="informationUser[0].foto"
        :nombre="informationUser[0].documento_identidad === null ? 'Sin nombre' :
          informationUser[0].nombres + ' ' + informationUser[0].apellidos
        "
        :dui="
          informationUser[0].documento_identidad === null
            ? 'Sin documento de identidad'
            : informationUser[0].documento_identidad
        "
        :ciudad="
          informationUser[0].ciudad === null ? 'Sin ciudad' : informationUser[0].ciudad
        "
        :direccion="
          informationUser[0].direccion === null
            ? 'Sin dirección'
            : informationUser[0].direccion
        "
        :nacimiento="
          informationUser[0].fecha_nacimiento === null
            ? 'Sin fecha de nacimiento'
            : informationUser[0].fecha_nacimiento
        "
        :uid="informationUser[0].uid === null ? 'Sin UID' : informationUser[0].uid"
        class="swiper"
        v-if="show"
      />
    </transition>
    <b-container fluid class="h-100 p-0 m-0">
      <qrcode-stream class="h-100 w-100" @detect="onDetect"></qrcode-stream>
    </b-container>
  </b-container>
</template>

<style lang="less">
.loading {
  position: fixed;
  z-index: 500;
  color: white;
  background-color: rgba(15, 17, 26, 0.7);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  button {
    position: fixed;
    top: 0;
    right: 0;
    margin: 18px;
  }
}
.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 2s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(2000px);
  opacity: 0;
}
.swiper {
  border-radius: 10px 10px 0px 0px;
  position: fixed;
  background-color: #f2f5fa;
  z-index: 1000;
  width: 100%;
  transition: all 0.25 ease;
  bottom: 0;
  border-bottom: solid 5px rgba(45, 143, 235);
  &.active {
    bottom: -100 !important;
  }
}
</style>

<script>
import Swiper from "@/components/Swiper.vue";
import axios from "axios";
export default {
  components: {
    Swiper
  },
  data() {
    return {
      retorno: "",
      show: false,
      loading: false,
      informationUser: {},
      isShow: false
    };
  },
  methods: {
    getInfo() {
      this.loading = true;
      axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "api/app/perfil.php?action=searchProfileWithUID&uid=" +
            this.retorno
        )
        .then(response => {
          this.informationUser = response.data;
          console.log(this.informationUser);
          this.loading = false;
          this.openSwiper();
          this.isShow = true;
          this.saveRecentProfile(this.informationUser[0].uid);
        });
    },
    saveRecentProfile(profileUid) {
      let datos = JSON.parse(localStorage.getItem("recent-profiles"));

      if (datos === null) {
        let arr = [];
        arr.push(profileUid);
        localStorage.setItem("recent-profiles", JSON.stringify(arr));
      } else {
        datos.push(profileUid);
        localStorage.setItem("recent-profiles", JSON.stringify(datos));
      }
    },
    openSwiper() {
      this.show = true != this.show;
      console.log("Se detecto");
    },
    async onDetect(promise) {
      if (!this.isShow) {
        const { imageData, content, location } = await promise;
        this.retorno = content;
        this.getInfo();
      }
    }
  }
};
</script>
