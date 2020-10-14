<template>
  <div class="swiper-container">
    <div class="swiper-content">
      <div class="img-container">
        <img :src="getProfilePhoto(image)" alt />
      </div>
      <div class="user-information">
        <div class="detail">
          <b class="broke">{{ nombre }}</b>
          <small class="broke">Nacimiento: {{ nacimiento }}</small>
          <small>Dui: {{ dui }}</small>
          <small>{{ direccion }}</small>
          <small>{{ ciudad }}</small>
        </div>
        <router-link :to="'/view/'+uid">Ver Perfil</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    uid: {
      type: String,
      default: "Sin UID"
    },
    nombre: {
      type: String,
      default: "Sin nombre"
    },
    nacimiento: {
      type: String,
      default: "Sin fecha de nacimiento"
    },
    dui: {
      type: String,
      default: "Sin dui"
    },
    ciudad: {
      type: String,
      default: "Sin ciudad"
    },
    direccion: {
      type: String,
      default: "Sin dirección"
    },
    image: {
      type: String,
      default: "Sin imagen"
    }
  },
  methods: {
    getProfilePhoto: function(image) {
      return process.env.VUE_APP_BASE_URL + "resources/images/" + image;
    }
  }
};
</script>

<style lang="less">
.detail {
  display: flex;
  flex-direction: column;
}
.broke {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
}
b {
}
.swiper-container {
  .swiper-content {
    width: 100%;
    display: flex;
    padding: 20px;
    .img-container {
      width: 40%;
      img {
        width: 100%;
      }
    }
    .user-information {
      padding-left: 0.9em;
      font-size: 1.2em;
      text-align: start;
      align-items: center;
      width: 60%;
      line-height: 1em;
      display: block;
    }
    a {
      display: block;
      margin-top: 5%;
    }
  }
}
</style>
