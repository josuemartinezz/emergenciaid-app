import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            authenticated: false,
        },
    },
    mutations: {
        getSession(state) {
            localStorage.getItem("session") ? (state.user.authenticated = true) : (state.user.authenticated = false)
        },
    },
    actions: {},
    modules: {},
})