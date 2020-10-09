<template>
  <b-container fluid class="bg-white h-100">
    <b-container>
      <b-row class="pt-4">
        <b-col cols="7">
          <b-button pill variant="link" to="/" class="bgc-gray p-1">
            <b-icon-chevron-left to="/dashboard"></b-icon-chevron-left>
            <p class="d-inline-block p-2 my-0">Regresar</p>
          </b-button>
          <h3 class="pt-3">Perfil #{{uid}}</h3>
        </b-col>
        <b-col cols="5">
          <b-img right rounded :src="getProfilePhoto(profileData.image)" fluid style="height:100px"></b-img>
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
            <div class="accordion" role="tablist">
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
            <div class="accordion" role="tablist">
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
            <div class="accordion" role="tablist">
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
            <div class="accordion" role="tablist">
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
    </b-container>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      uid: this.$route.params.uid,
      profileData: {
        image: "sin_foto.png",
        names: "María José",
        surnames: "Castellanos Castillo",
        bloodType: "O+",
        birthDate: "29/08/2002",
        emergencyContacts: {
          1: {
            name: "Bryan Galdámez",
            relation: "Pareja",
            phone: "+503 7129-4657",
            email: "josuegalre@gmail.com",
            address: "Mi casa"
          },
          2: {
            name: "Sandra Recinos",
            relation: "Suegra",
            phone: "+503 7793-1699",
            email: "sandrygal@gmail.com",
            address: "Mi casa xd"
          }
        },
        doctorContacts: {
          1: {
            name: "Roberto Varela",
            specialty: "Gastroenterólogo",
            phone: "+503 2145-6589"
          },
          2: {
            name: "Juan Vela",
            specialty: "Cirujano",
            phone: "+503 2356-8947"
          }
        },
        medicines: {
          1: {
            name: "Benazepril",
            notes: "",
            doses: "1 píldora",
            frequency: "12 horas"
          },
          2: {
            name: "Aspirina",
            notes: "Para la gripe",
            doses: "1 píldora",
            frequency: "8 horas"
          }
        },
        medicalConditions: {
          1: {
            name: "Hipertensión",
            notes: "Para el dolor de cabeza",
            medication: "Benazepril"
          },
          2: {
            name: "Migraña",
            notes: "Fuerte dolor de cabeza",
            medication: "Aspirina"
          }
        }
      }
    };
  },
  methods: {
    getProfilePhoto: function(photo) {
      return process.env.VUE_APP_BASE_URL + "resources/images/sin_foto.png";
    }
  },
  created() {
    console.log(this.uid);
  }
};
</script>
