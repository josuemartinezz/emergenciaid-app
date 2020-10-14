import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueQrcodeReader from "vue-qrcode-reader"
import {
    BIconSearch,
    BIconPeople,
    BIconHouse,
    BIconUpcScan,
    BIconChevronLeft,
    BIconChevronDown,
    BNavbar,
    BImg,
    BContainer,
    BRow,
    BCol,
    BButton,
    BSkeleton,
    BSkeletonWrapper,
    BSkeletonImg,
    BCollapse,
    BFormGroup,
    BFormInput,
    BLink,
    BAlert,
    BFormTextarea,
} from "bootstrap-vue"
import "./assets/webfonts/stylesheet.css"

Vue.component("b-navbar", BNavbar)
Vue.component("b-img", BImg)
Vue.component("b-container", BContainer)
Vue.component("b-row", BRow)
Vue.component("b-col", BCol)
Vue.component("b-button", BButton)
Vue.component("b-skeleton", BSkeleton)
Vue.component("b-skeleton-wrapper", BSkeletonWrapper)
Vue.component("b-skeleton-img", BSkeletonImg)
Vue.component("b-collapse", BCollapse)
Vue.component("b-form-group", BFormGroup)
Vue.component("b-form-input", BFormInput)
Vue.component("b-link", BLink)
Vue.component("b-alert", BAlert)
Vue.component("b-form-textarea", BFormTextarea)
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
