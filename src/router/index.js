import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import store from "../store/index"

Vue.use(VueRouter)

const routes = [{
        path: "/dashboard",
        name: "Home",
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: "/",
        name: "Redirect",
        component: Home,
        meta: { requiresAuth: false },
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login.vue"),
        meta: { requiresAuth: false },
    },
    {
        path: "/scan",
        name: "Qrcode",
        component: () =>
            import ("../views/QrLector.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/view/:uid",
        name: "Viewprofile",
        component: () =>
            import ("../views/View.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/search/:search",
        name: "Search",
        component: () =>
            import ("../views/Search.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/account",
        name: "Account",
        component: () =>
            import ("../views/Account.vue"),
        meta: { requiresAuth: true },
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    const globalSession = JSON.parse(localStorage.getItem("session"))
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!globalSession) {
            next({
                path: "/login",
            })
        } else {
            next()
        }
    } else {
        if (globalSession) {
            next({
                path: "/dashboard",
            })
        } else {
            next()
        }
    }
})

export default router