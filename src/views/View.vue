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
              :src="getProfilePhoto(profileData.generalInformation.image)"
              fluid
              style="height:100px"
            ></b-img>
          </b-col>
          <b-col cols="12" class="mt-3">
            <div class="accordion" role="tablist">
              <b-container class="p-0" fluid>
                <b-button class="dropdown-gray" block v-b-toggle.generalInformation>
                  <b-row class="p-0">
                    <b-col cols="10">
                      <p class="text-left m-0">Información General</p>
                    </b-col>
                    <b-col cols="2">
                      <b-icon-chevron-down />
                    </b-col>
                  </b-row>
                </b-button>
                <b-collapse
                  id="generalInformation"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-container fluid class="px-3 bgc-gray profile-container">
                    <b-row class="pt-2">
                      <b-col cols="12">
                        <b-form-group
                          id="names-data"
                          label="Nombres"
                          label-for="email"
                          label-class="text-help"
                        >
                          <b-form-input
                            class="textfield tfc-white"
                            id="names"
                            v-model="profileData.generalInformation.name"
                            type="text"
                            disabled
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
                            class="textfield tfc-white"
                            id="surnames"
                            v-model="profileData.generalInformation.surname"
                            type="text"
                            disabled
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="12">
                        <b-form-group
                          id="email-data"
                          label="Correo electrónico"
                          label-for="email"
                          label-class="text-help"
                        >
                          <b-form-input
                            class="textfield tfc-white"
                            id="email"
                            v-model="profileData.generalInformation.email"
                            type="text"
                            disabled
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="12">
                        <b-form-group
                          id="bloodType-data"
                          label="Fecha de nacimiento"
                          label-class="text-help"
                        >
                          <b-row>
                            <b-col class="pr-1">
                              <b-form-input
                                class="textfield tfc-white text-center"
                                id="day"
                                v-model="profileData.generalInformation.birthDate.split('-')[2]"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-col>
                            <b-col class="px-1">
                              <b-form-input
                                class="textfield tfc-white text-center"
                                id="month"
                                v-model="profileData.generalInformation.birthDate.split('-')[1]"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-col>
                            <b-col class="pl-1">
                              <b-form-input
                                class="textfield tfc-white text-center"
                                id="year"
                                v-model="profileData.generalInformation.birthDate.split('-')[0]"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-col>
                          </b-row>
                        </b-form-group>
                      </b-col>
                      <b-col cols="12">
                        <b-row>
                          <b-col cols="6" class="pr-1">
                            <b-form-group
                              id="phone-data"
                              label="Teléfono"
                              label-for="email"
                              label-class="text-help"
                            >
                              <b-form-input
                                class="textfield tfc-white"
                                id="profile-phone"
                                v-model="profileData.generalInformation.phone"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col cols="6" class="pl-1">
                            <b-form-group
                              id="birthDate-data"
                              label="Documento"
                              label-for="profile-doc_id"
                              label-class="text-help"
                            >
                              <b-form-input
                                class="textfield tfc-white"
                                id="profile-doc_id"
                                v-model="profileData.generalInformation.doc_id"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="12">
                        <b-row>
                          <b-col cols="6" class="pr-1">
                            <b-form-group
                              id="profile-data"
                              label="Tipo de sangre"
                              label-for="bloodType"
                              label-class="text-help"
                            >
                              <b-form-input
                                class="textfield tfc-white"
                                id="profile-bloodType"
                                v-model="profileData.generalInformation.bloodType"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col cols="6" class="pl-1">
                            <b-form-group
                              id="birthDate-data"
                              label="Es donante"
                              label-for="isDonor"
                              label-class="text-help"
                            >
                              <b-form-input
                                class="textfield tfc-white"
                                id="profile-isDonor"
                                v-model="profileData.generalInformation.isDonor"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="12">
                        <b-row>
                          <b-col cols="3" class="pr-1">
                            <b-form-group
                              id="names-data"
                              label="Altura"
                              label-for="height"
                              label-class="text-help"
                            >
                              <b-form-input
                                class="textfield tfc-white"
                                id="height"
                                v-model="profileData.generalInformation.height"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col cols="3" class="px-1">
                            <b-form-group
                              id="names-data"
                              label="Peso"
                              label-for="weight"
                              label-class="text-help"
                            >
                              <b-form-input
                                class="textfield tfc-white"
                                id="weight"
                                v-model="profileData.generalInformation.weight"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col cols="6" class="pl-1">
                            <b-form-group
                              id="isss-data"
                              label="Estado del ISSS"
                              label-for="isss"
                              label-class="text-help"
                            >
                              <b-form-input
                                class="textfield tfc-white"
                                id="isss"
                                v-model="profileData.generalInformation.isssState"
                                type="text"
                                disabled
                              ></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                      </b-col>
                      <b-col cols="12">
                        <b-form-group
                          label-class="text-help"
                          label="Dirección"
                          label-for="profile-address"
                        >
                          <b-form-textarea
                            class="textfield tfc-white"
                            id="profile-address"
                            v-model="profileData.generalInformation.address"
                            max-rows="4"
                            disabled
                            no-resize
                          ></b-form-textarea>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-collapse>
              </b-container>
            </div>
          </b-col>
          <b-col cols="12" class="mt-3">
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
                              disabled
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
                              :id="'phone-contact'+index"
                              v-model="contact.phone"
                              type="text"
                              disabled
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
                              disabled
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
                            <b-form-textarea
                              class="textfield tfc-white"
                              :id="'address'+index"
                              v-model="contact.address"
                              type="text"
                              max-rows="4"
                              disabled
                              no-resize
                            ></b-form-textarea>
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
                              disabled
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
                              :id="'phone-doctor'+index"
                              v-model="contact.phone"
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
                            <b-form-textarea
                              class="textfield tfc-white"
                              :id="'notes'+index"
                              v-model="medicine.notes"
                              max-rows="4"
                              disabled
                              no-resize
                            ></b-form-textarea>
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
                              disabled
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
                              disabled
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
                        <p class="text-left m-0">{{condition.condition}}</p>
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
                            <b-form-textarea
                              class="textfield tfc-white"
                              :id="'notes-condition'+index"
                              v-model="condition.notes"
                              max-rows="4"
                              disabled
                              no-resize
                            ></b-form-textarea>
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
                              disabled
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
    <b-alert
      :show="cuentaAlerta"
      class="position-fixed fixed-bottom m-0 rounded-0 text-center"
      style="z-index: 9999;"
      fade
      variant="danger"
      @dismiss-count-down="countDownChanged"
    >{{profileLoadError}}</b-alert>
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
        generalInformation: { birthDate: "" },
        emergencyContacts: {},
        doctorContacts: {},
        medicines: {},
        medicalConditions: {}
      },
      cuentaAlerta: 0,
      segundosRestantes: 3,
      profileLoadError: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    countDownChanged(cuentaAlerta) {
      this.cuentaAlerta = cuentaAlerta;
    },
    showAlert() {
      this.cuentaAlerta = this.segundosRestantes;
    },
    getProfilePhoto(photo) {
      return process.env.VUE_APP_BASE_URL + "resources/images/" + photo;
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
          if (response.data.status === 1) {
            this.profileData.generalInformation =
              response.data.dataset.generalInformation;
            this.profileData.emergencyContacts =
              response.data.dataset.emergencyContacts;
            this.profileData.doctorContacts =
              response.data.dataset.doctorContacts;
            this.profileData.medicines = response.data.dataset.medication;
            this.profileData.medicalConditions =
              response.data.dataset.medicalConditions;
            this.loading = false;
          } else {
            this.profileLoadError = response.data.exception;
            this.showAlert();
            setTimeout(() => {
              this.$router.push("/dashboard");
            }, 3000);
          }
        });
    },
    toFormData(obj) {
      var form_data = new FormData();
      for (var key in obj) {
        form_data.append(key, obj[key]);
      }
      return form_data;
    }
  }
};
</script>
