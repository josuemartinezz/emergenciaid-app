import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            authenticated: false
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})