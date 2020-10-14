<template>
  <b-container class="pt-4">
    <b-skeleton-wrapper :loading="loading">
      <template v-slot:loading>
        <b-row>
          <b-col cols="12" class="pt-0">
            <b-skeleton width="25%"></b-skeleton>
            <b-skeleton type="button" width="100%"></b-skeleton>
          </b-col>
          <b-col cols="12" class="pt-4">
            <b-skeleton width="25%"></b-skeleton>
            <b-skeleton type="button" width="100%"></b-skeleton>
          </b-col>
          <b-col cols="12" class="pt-4">
            <b-skeleton width="35%"></b-skeleton>
            <b-skeleton type="button" width="100%"></b-skeleton>
          </b-col>
          <b-col cols="12" class="pt-4">
            <b-row>
              <b-col class="pr-1">
                <b-skeleton width="40%"></b-skeleton>
                <b-skeleton type="button" width="100%"></b-skeleton>
              </b-col>
              <b-col class="px-1">
                <b-skeleton width="40%"></b-skeleton>
                <b-skeleton type="button" width="100%"></b-skeleton>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" class="pt-4">
            <b-skeleton width="45%"></b-skeleton>
            <b-skeleton type="button" width="100%"></b-skeleton>
          </b-col>
        </b-row>
      </template>

      <div class="accordion" role="tablist">
        <b-container class="p-0" fluid>
          <b-button class="dropdown-gray bg-white" block v-b-toggle.mi-perfil>
            <b-row class="p-0">
              <b-col cols="10">
                <p class="text-left m-0">Mi perfil</p>
              </b-col>
              <b-col cols="2">
                <b-icon-chevron-down />
              </b-col>
            </b-row>
          </b-button>
          <b-collapse id="mi-perfil" visible accordion="my-accordion" role="tabpanel">
            <b-container fluid class="px-3 bg-white profile-container">
              <b-row class="pt-2">
                <b-col cols="12">
                  <b-form-group
                    id="nombre"
                    label="Nombres"
                    label-for="name"
                    label-class="text-help"
                  >
                    <b-form-input
                      class="textfield"
                      id="name"
                      v-model="info.nombre"
                      type="text"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    id="email"
                    label="Correo electrónico"
                    label-for="email"
                    label-class="text-help"
                  >
                    <b-form-input
                      class="textfield"
                      id="email"
                      v-model="info.email"
                      type="text"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    id="p_phone"
                    label="Teléfono personal"
                    label-for="p_phone"
                    label-class="text-help"
                  >
                    <b-form-input
                      class="textfield"
                      id="p_phone"
                      v-model="info.telefono"
                      type="text"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col cols="12">
                  <b-row>
                    <b-col cols="6">
                      <b-form-group
                        id="organizacion"
                        label="Organización"
                        label-for="organizacion"
                        label-class="text-help"
                      >
                        <b-form-input
                          class="textfield"
                          id="organizacion"
                          v-model="info.organizacion"
                          type="text"
                          disabled
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group
                        id="tipo_usuario"
                        label="Rol"
                        label-for="tipo_usuario"
                        label-class="text-help"
                      >
                        <b-form-input
                          class="textfield"
                          id="tipo_usuario"
                          v-model="info.tipo_usuario"
                          type="text"
                          disabled
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="12">
                  <b-form-group
                    id="telefono_org"
                    label="Teléfono de la organización"
                    label-for="telefono_org"
                    label-class="text-help"
                  >
                    <b-form-input
                      class="textfield"
                      id="telefono_org"
                      v-model="info.telefono_org"
                      type="text"
                      disabled
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-container>
          </b-collapse>
        </b-container>
      </div>
    </b-skeleton-wrapper>

    <b-col class="text-center mt-4">
      <b-button @click="logout" class="button">Cerrar sesión</b-button>
    </b-col>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: [],
      loading: true
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
      this.$store.state.user.authenticated = false;
    },
    getInfo() {
      axios
        .post(
          process.env.VUE_APP_BASE_URL +
            "api/admin/user.php?action=getAppProfileInfo&id_user=" +
            localStorage.getItem("session")
        )
        .then(response => {
          this.info = response.data.dataset;
          this.loading = false;
        });
    }
  }
};
</script>

<style>
</style>
