<template>
  <b-container fluid class="bgc-gray fixed-height overflow-auto">
    <b-skeleton-wrapper :loading="loading">
      <template v-slot:loading>
        <b-container fluid class="pt-4 overflow-auto">
          <b-row class="mb-4">
            <b-col cols="5">
              <b-skeleton-img no-aspect height="100%" width="100%"></b-skeleton-img>
            </b-col>
            <b-col cols="7">
              <b-skeleton width="85%" class="mb-3"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="60%"></b-skeleton>
              <b-skeleton width="50%"></b-skeleton>
              <b-skeleton width="65%"></b-skeleton>
            </b-col>
          </b-row>
          <b-row class="mb-4">
            <b-col cols="5">
              <b-skeleton-img no-aspect height="100%" width="100%"></b-skeleton-img>
            </b-col>
            <b-col cols="7">
              <b-skeleton width="85%" class="mb-3"></b-skeleton>
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
              <b-skeleton width="85%" class="mb-3"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="60%"></b-skeleton>
              <b-skeleton width="50%"></b-skeleton>
              <b-skeleton width="65%"></b-skeleton>
            </b-col>
          </b-row>
        </b-container>
      </template>
      <b-container fluid class="pt-4 overflow-auto">
        <b-link
          :to="'/view/'+profile.uid"
          class="text-decoration-none text-regular"
          v-for="(profile, index) in profiles"
          :key="index"
        >
          <b-row class="mb-4">
            <b-col cols="5">
              <b-img :src="getProfilePhoto(profile.image)" fluid></b-img>
            </b-col>
            <b-col cols="7">
              <h5 class="card-title text-regular text-truncate">{{profile.name}}</h5>
              <p class="mb-0 text_secondary">{{profile.age}}</p>
              <p class="mb-0 text_secondary">{{profile.doc_id}}</p>
              <p class="mb-0 text_secondary">{{profile.city}}</p>
              <p class="mb-0 text_secondary">{{profile.country}}</p>
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
      loading: true,
      profiles: {}
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    getProfilePhoto: function(image) {
      return process.env.VUE_APP_BASE_URL + "resources/images/" + image;
    },
    test() {
      let datos = JSON.parse(localStorage.getItem("recent-profiles"));
      const arr = [...new Set(datos)];
      let formData = this.toFormData(arr);
      axios
        .post(
          process.env.VUE_APP_BASE_URL +
            "api/admin/perfil.php?action=recentProfiles",
          formData
        )
        .then(response => {
          this.profiles = response.data.dataset;
          this.loading = false;
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
</style>
