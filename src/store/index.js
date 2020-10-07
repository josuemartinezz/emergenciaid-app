import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            authenticated: false
        },
        HOME_PATH: 'http://localhost/emergencia.id/website/public/',
    },
    mutations: {},
    actions: {},
    modules: {}
})