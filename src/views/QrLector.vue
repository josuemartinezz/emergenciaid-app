<template>
  <div class="code-qr">
    <div v-if="loading" class="loading"><p>Cargando...</p></div>
    <div v-if="isShow" class="loading">
      <b-button @click="isShow = false, openSwiper()" variant="light">Cerrar</b-button>
    </div>
    <transition name="slide-fade">
      <Swiper
        :nombre="
          informationUser[0].nombres + ' ' + informationUser[0].apellidos
        "
        :dui="informationUser[0].documento_identidad"
        :ciudad="informationUser[0].nombre"
        :direccion="informationUser[0].direccion"
        :email="informationUser[0].email"
        :uid="informationUser[0].uid"
        class="swiper"
        v-if="show"
      />
    </transition>
    <div style="width: 90%; margin: auto">
      <qrcode-stream @detect="onDetect"></qrcode-stream>
    </div>
  </div>
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
  button{
    position: fixed;
    top: 0;
    left: 0;
    margin: 10px;
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

.code-qr {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>

<script>
import Swiper from "@/components/Swiper.vue";
import axios from "axios";
export default {
  components: {
    Swiper,
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
        .then((response) => {
          this.informationUser = response.data;
          this.loading = false;
          this.openSwiper();
          this.isShow = true
        });
    },
    openSwiper() {
      this.show = true != this.show;
    },
    async onDetect(promise) {
      const { imageData, content, location } = await promise;
      this.retorno = content;
      //this.openSwiper();
      this.getInfo();
    },
  },
};
</script>