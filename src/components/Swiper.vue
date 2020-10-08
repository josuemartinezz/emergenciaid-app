<template>
  <div class="swiper-container">
    <div class="swiper-content">
      <div class="img-container">
        <img
          src="https://images.squarespace-cdn.com/content/v1/564142efe4b09d10c39f8a8f/1594926536902-L2RPB0G2W5J7PK3GSJX8/ke17ZwdGBToddI8pDm48kKSl30YZjGm1cuQENGkIgpd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQTQPF36sacLINHj8EM-mOpV6TiNljwpig9fIEXFxRtq20zARXe9frESMRzovEkMi/no-person-profile-pic.png"
          alt=""
        />
      </div>
      <div class="user-information">
        <div class="detail">
          <b class="broke">{{ nombre }}</b>
          <small class="broke">{{ email }} años</small>
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
      default: 0,
    },
    nombre: {
      type: String,
      default: "---",
    },
    email: {
      type: String,
      default: "---",
    },
    dui: {
      type: String,
      default: "---",
    },
    ciudad: {
      type: String,
      default: "---",
    },
    direccion: {
      type: String,
      default: "---",
    },
  },
};
</script>

<style lang="less">
.detail {
  display: flex;
  flex-direction: column;
}
.broke{
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
