import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueQrcodeReader from "vue-qrcode-reader"
import {
    BootstrapVue,
    BIconSearch,
    BIconPeople,
    BIconHouse,
    BIconUpcScan,
    BIconChevronLeft,
    BIconChevronDown,
} from "bootstrap-vue"
import "./assets/webfonts/stylesheet.css"

Vue.use(BootstrapVue)
Vue.component("BIconSearch", BIconSearch)
Vue.component("BIconPeople", BIconPeople)
Vue.component("BIconHouse", BIconHouse)
Vue.component("BIconUpcScan", BIconUpcScan)
Vue.component("BIconChevronLeft", BIconChevronLeft)
Vue.component("BIconChevronDown", BIconChevronDown)
Vue.use(VueQrcodeReader)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
