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
          <router-link :to="'/view/'+uid">Ver Perfil</router-link>
        </div>
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
      default: "---"
    },
    nombre: {
      type: String,
      default: "---"
    },
    nacimiento: {
      type: String,
      default: "---"
    },
    dui: {
      type: String,
      default: "---"
    },
    ciudad: {
      type: String,
      default: "---"
    },
    direccion: {
      type: String,
      default: "---"
    },
    image: {
      type: String,
      default: "---"
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
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
b {
}
.swiper-container {
  .swiper-content {
    width: 100%;
    display: flex;
    .img-container {
      width: 50%;
      img {
        width: 100%;
        padding-left: 45px;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 10px;
        object-fit: cover;
      }
    }
    .user-information {
      text-align: start;
      display: flex;
      align-items: center;
      width: 50%;
    }
  }
}
</style>
