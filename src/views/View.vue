<template>
  <b-container fluid class="bg-white h-100">
    <b-container>
      <div class="position-fixed px-0 pt-4" style="z-index: 999;">
        <b-button pill variant="link" to="/dashboard" class="bgc-gray p-1">
          <b-icon-chevron-left></b-icon-chevron-left>
          <p class="d-inline-block p-2 my-0">Regresar</p>
        </b-button>
      </div>
      <b-skeleton-wrapper :loading="loading">
        <template v-slot:loading>
          <b-row class="py-4">
            <b-col cols="8" class="mt-3">
              <b-skeleton width="65%" class="mt-5 p-3"></b-skeleton>
            </b-col>
            <b-col cols="4">
              <b-skeleton-img no-aspect height="100%"></b-skeleton-img>
            </b-col>
            <b-col cols="12" class="pt-4">
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
              <b-skeleton width="40%"></b-skeleton>
              <b-row>
                <b-col class="pr-1">
                  <b-skeleton type="button" width="100%"></b-skeleton>
                </b-col>
                <b-col class="px-1">
                  <b-skeleton type="button" width="100%"></b-skeleton>
                </b-col>
                <b-col class="pl-1">
                  <b-skeleton type="button" width="100%"></b-skeleton>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" class="pt-4">
              <b-skeleton width="45%"></b-skeleton>
              <b-skeleton type="button" width="100%"></b-skeleton>
            </b-col>
            <b-col cols="12" class="pt-4">
              <b-skeleton width="37%"></b-skeleton>
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
          </b-row>
        </template>
        <b-row class="pt-4">
          <b-col cols="7" class="mt-3">
            <h3 class="pt-5">Perfil #{{uid}}</h3>
          </b-col>
          <b-col cols="5">
            <b-img
              right
              rounded
              :src="getProfilePhoto(profileData.image)"
              fluid
              style="height:100px"
            ></b-img>
          </b-col>
          <b-col cols="12" class="mt-3">
            <b-form-group id="names-data" label="Nombres" label-for="email" label-class="text-help">
              <b-form-input
                class="textfield"
                :class="profileData.names ? 'filled' : ''"
                id="names"
                v-model="profileData.names"
                type="text"
                :disabled="true"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="surnames-data"
              label="Apellidos"
              label-for="names"
              label-class="text-help"
            >
              <b-form-input
                class="textfield"
                :class="profileData.surnames ? 'filled' : ''"
                id="surnames"
                v-model="profileData.surnames"
                type="text"
                :disabled="true"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="birthDate-data"
              label="Tipo de sangre"
              label-for="bloodType"
              label-class="text-help"
            >
              <b-form-input
                class="textfield"
                :class="profileData.bloodType ? 'filled' : ''"
                id="bloodType"
                v-model="profileData.bloodType"
                type="text"
                :disabled="true"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group id="bloodType-data" label="Fecha de nacimiento" label-class="text-help">
              <b-row>
                <b-col class="pr-1">
                  <b-form-input
                    class="textfield text-center"
                    :class="profileData.birthDate.split('/')[0] !== '00' ? 'filled' : ''"
                    id="day"
                    v-model="profileData.birthDate.split('/')[0]"
                    type="text"
                    :disabled="true"
                  ></b-form-input>
                </b-col>
                <b-col class="px-1">
                  <b-form-input
                    class="textfield text-center"
                    :class="profileData.birthDate.split('/')[1] !== '00' ? 'filled' : ''"
                    id="month"
                    v-model="profileData.birthDate.split('/')[1]"
                    type="text"
                    :disabled="true"
                  ></b-form-input>
                </b-col>
                <b-col class="pl-1">
                  <b-form-input
                    class="textfield text-center"
                    :class="profileData.birthDate.split('/')[2] !== '0000' ? 'filled' : ''"
                    id="year"
                    v-model="profileData.birthDate.split('/')[2]"
                    type="text"
                    :disabled="true"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="emergencyContacts"
              label="Contactos de emergencia"
              label-for="emergencyContacts"
              label-class="text-help"
            >
              <div v-if="Object.keys(profileData.emergencyContacts).length === 0">
                <b-button disabled class="dropdown-gray" block>
                  <b-row class="p-0">
                    <b-col>
                      <p class="text-left m-0">Sin contactos de emergencia</p>
                    </b-col>
                  </b-row>
                </b-button>
              </div>
              <div class="accordion" role="tablist" v-else>
                <b-container
                  class="p-0"
                  fluid
                  v-for="(contact, key, index) in profileData.emergencyContacts"
                  :key="key"
                >
                  <b-button class="dropdown-gray" block v-b-toggle="'emergencyContact-'+index">
                    <b-row class="p-0">
                      <b-col cols="10">
                        <p class="text-left m-0">{{contact.name}}</p>
                      </b-col>
                      <b-col cols="2">
                        <b-icon-chevron-down />
                      </b-col>
                    </b-row>
                  </b-button>
                  <b-collapse
                    :id="'emergencyContact-'+index"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-container fluid class="px-3 bgc-gray profile-container">
                      <b-row class="pt-2">
                        <b-col cols="12">
                          <b-form-group
                            :id="'relation'+index+'-data'"
                            label="Relación"
                            :label-for="'relation'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'relation'+index"
                              v-model="contact.relation"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="12">
                          <b-form-group
                            :id="'phone'+index+'-data'"
                            label="Teléfono"
                            :label-for="'phone'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'phone'+index"
                              v-model="contact.phone"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="12">
                          <b-form-group
                            :id="'email'+index+'-data'"
                            label="Correo electrónico"
                            :label-for="'email'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'email'+index"
                              v-model="contact.email"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="12">
                          <b-form-group
                            :id="'address'+index+'-data'"
                            label="Dirección"
                            :label-for="'address'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'address'+index"
                              v-model="contact.address"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-collapse>
                </b-container>
              </div>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="doctorContacts"
              label="Doctores de contacto"
              label-for="doctorContacts"
              label-class="text-help"
            >
              <div v-if="Object.keys(profileData.doctorContacts).length === 0">
                <b-button disabled class="dropdown-gray" block>
                  <b-row class="p-0">
                    <b-col>
                      <p class="text-left m-0">Sin doctores de contacto</p>
                    </b-col>
                  </b-row>
                </b-button>
              </div>
              <div class="accordion" role="tablist" v-else>
                <b-container
                  class="p-0"
                  fluid
                  v-for="(contact, key, index) in profileData.doctorContacts"
                  :key="key"
                >
                  <b-button class="dropdown-gray" block v-b-toggle="'doctorContact-'+index">
                    <b-row class="p-0">
                      <b-col cols="10">
                        <p class="text-left m-0">{{contact.name}}</p>
                      </b-col>
                      <b-col cols="2">
                        <b-icon-chevron-down />
                      </b-col>
                    </b-row>
                  </b-button>
                  <b-collapse :id="'doctorContact-'+index" accordion="my-accordion" role="tabpanel">
                    <b-container fluid class="px-3 bgc-gray profile-container">
                      <b-row class="pt-2">
                        <b-col cols="12">
                          <b-form-group
                            :id="'specialty'+index+'-data'"
                            label="Especialidad"
                            :label-for="'specialty'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'specialty'+index"
                              v-model="contact.specialty"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="12">
                          <b-form-group
                            :id="'phone'+index+'-data'"
                            label="Teléfono"
                            :label-for="'phone'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'phone'+index"
                              v-model="contact.phone"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-collapse>
                </b-container>
              </div>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="medicines"
              label="Medicamentos"
              label-for="medicines"
              label-class="text-help"
            >
              <div v-if="Object.keys(profileData.medicines).length === 0">
                <b-button disabled class="dropdown-gray" block>
                  <b-row class="p-0">
                    <b-col>
                      <p class="text-left m-0">Sin medicamentos</p>
                    </b-col>
                  </b-row>
                </b-button>
              </div>
              <div class="accordion" role="tablist" v-else>
                <b-container
                  class="p-0"
                  fluid
                  v-for="(medicine, key, index) in profileData.medicines"
                  :key="key"
                >
                  <b-button class="dropdown-gray" block v-b-toggle="'medicine-'+index">
                    <b-row class="p-0">
                      <b-col cols="10">
                        <p class="text-left m-0">{{medicine.name}}</p>
                      </b-col>
                      <b-col cols="2">
                        <b-icon-chevron-down />
                      </b-col>
                    </b-row>
                  </b-button>
                  <b-collapse :id="'medicine-'+index" accordion="my-accordion" role="tabpanel">
                    <b-container fluid class="px-3 bgc-gray profile-container">
                      <b-row class="pt-2">
                        <b-col cols="12">
                          <b-form-group
                            :id="'notes'+index+'-data'"
                            label="Nota adicional"
                            :label-for="'notes'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'notes'+index"
                              v-model="medicine.notes"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="12">
                          <b-form-group
                            :id="'doses'+index+'-data'"
                            label="Cantidad de dosis"
                            :label-for="'doses'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'doses'+index"
                              v-model="medicine.doses"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="12">
                          <b-form-group
                            :id="'frequency'+index+'-data'"
                            label="Frecuencia"
                            :label-for="'frequency'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'frequency'+index"
                              v-model="medicine.frequency"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-collapse>
                </b-container>
              </div>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="medicalCondition"
              label="Condiciones médicas"
              label-for="medicalCondition"
              label-class="text-help"
            >
              <div v-if="Object.keys(profileData.medicalConditions).length === 0">
                <b-button disabled class="dropdown-gray" block>
                  <b-row class="p-0">
                    <b-col>
                      <p class="text-left m-0">Sin condiciones médicas</p>
                    </b-col>
                  </b-row>
                </b-button>
              </div>
              <div class="accordion" role="tablist" v-else>
                <b-container
                  class="p-0"
                  fluid
                  v-for="(condition, key, index) in profileData.medicalConditions"
                  :key="key"
                >
                  <b-button class="dropdown-gray" block v-b-toggle="'medicalCondition-'+index">
                    <b-row class="p-0">
                      <b-col cols="10">
                        <p class="text-left m-0">{{condition.name}}</p>
                      </b-col>
                      <b-col cols="2">
                        <b-icon-chevron-down />
                      </b-col>
                    </b-row>
                  </b-button>
                  <b-collapse
                    :id="'medicalCondition-'+index"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-container fluid class="px-3 bgc-gray profile-container">
                      <b-row class="pt-2">
                        <b-col cols="12">
                          <b-form-group
                            :id="'notes'+index+'-data'"
                            label="Nota adicional"
                            :label-for="'notes'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'notes'+index"
                              v-model="condition.notes"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="12">
                          <b-form-group
                            :id="'medication'+index+'-data'"
                            label="Medicación"
                            :label-for="'medication'+index"
                            label-class="text-help"
                          >
                            <b-form-input
                              class="textfield tfc-white"
                              :id="'medication'+index"
                              v-model="condition.medication"
                              type="text"
                              :disabled="true"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-collapse>
                </b-container>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
      </b-skeleton-wrapper>
    </b-container>
  </b-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
      uid: this.$route.params.uid,
      profileData: {
        image: "",
        names: "",
        surnames: "",
        bloodType: "",
        birthDate: "",
        emergencyContacts: {},
        doctorContacts: {},
        medicines: {},
        medicalConditions: {}
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getProfilePhoto: function(photo) {
      return process.env.VUE_APP_BASE_URL + "resources/images/sin_foto.png";
    },
    getData() {
      let formData = this.toFormData({ uid: this.uid });
      axios
        .post(
          process.env.VUE_APP_BASE_URL +
            "api/admin/perfil.php?action=getProfileByUID",
          formData
        )
        .then(response => {
          console.log(response.data.dataset);
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
