<template>
  <b-container fluid class="bgc-gray fixed-height overflow-auto">
    <b-skeleton-wrapper :loading="loading">
      <template v-slot:loading>
        <b-container fluid class="pt-4 overflow-auto">
          <b-row class="mb-4">
            <b-col cols="5">
              <b-skeleton-img no-aspect height="100%"></b-skeleton-img>
            </b-col>
            <b-col cols="7">
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="60%"></b-skeleton>
              <b-skeleton width="50%"></b-skeleton>
              <b-skeleton width="65%"></b-skeleton>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col cols="5">
              <b-skeleton-img no-aspect height="100%"></b-skeleton-img>
            </b-col>
            <b-col cols="7">
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="60%"></b-skeleton>
              <b-skeleton width="50%"></b-skeleton>
              <b-skeleton width="65%"></b-skeleton>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col cols="5">
              <b-skeleton-img no-aspect height="100%"></b-skeleton-img>
            </b-col>
            <b-col cols="7">
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="60%"></b-skeleton>
              <b-skeleton width="50%"></b-skeleton>
              <b-skeleton width="65%"></b-skeleton>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col cols="5">
              <b-skeleton-img no-aspect height="100%"></b-skeleton-img>
            </b-col>
            <b-col cols="7">
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="60%"></b-skeleton>
              <b-skeleton width="50%"></b-skeleton>
              <b-skeleton width="65%"></b-skeleton>
            </b-col>
          </b-row>
        </b-container>
      </template>
      <b-container fluid class="pt-4 overflow-auto">
        <b-link to="/view/:uid" class="text-decoration-none text-regular">
          <b-row class="mb-4">
            <b-col cols="5">
              <b-img :src="getProfilePhoto()" fluid></b-img>
            </b-col>
            <b-col cols="7">
              <h5 class="card-title text-regular text-truncate">Complete su nombre.</h5>
              <p class="card-text mb-0">18 años</p>
              <p class="card-text mb-0">05236566-1</p>
              <p class="card-text mb-0">San Salvador</p>
              <p class="card-text mb-0">El Salvador</p>
            </b-col>
          </b-row>
        </b-link>
      </b-container>
    </b-skeleton-wrapper>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true
    };
  },
  methods: {
    getProfilePhoto: function(photo) {
      return process.env.VUE_APP_BASE_URL + "resources/images/sin_foto.png";
    },
    test() {
      let arr = ["NIRXK", "CZPUF", "6HVA3", "WM26O", "ZGWYW"];
      let formData = this.toFormData(arr);
      axios
        .post(
          process.env.VUE_APP_BASE_URL +
            "api/admin/perfil.php?action=recentProfiles",
          formData
        )
        .then(response => {
          console.log(response.data);
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

<style>
.card-text {
  font-size: 16px;
  color: #98a1b3;
}
</style>
