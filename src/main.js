import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueQrcodeReader from "vue-qrcode-reader"
import { BootstrapVue } from "bootstrap-vue"

Vue.use(BootstrapVue)
Vue.use(VueQrcodeReader)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
