import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/auth/Login.vue')
const Register = () => import('@/auth/Register.vue')

/* Layouts */
const Default = () => import('@/layouts/Default.vue')

/* Authenticated Component */
const Dashboard = () => import('@/pages/Dashboard.vue')
const Users = () => import('@/pages/UsersView.vue')
const Bdsm = () => import('@/pages/Bdsm.vue')
const Anuncios = () => import('@/pages/Anuncios.vue')



const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`,
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        path: "/",
        component: Default,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            },
            {
                name: 'users',
                path: '/usuarios',
                component: Users,
                meta: {
                    title: `Usuarios`
                }
            },
            {
                name: 'anuncios',
                path: '/anuncios',
                component: Anuncios,
                meta: {
                    title: `Usuarios`
                }
            },
            {
                name: 'bdsm',
                path: '/fantasias/bdsm',
                component: Bdsm,
                meta: {
                    title: `BDSM`
                }
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "login" })
        }
    }
})

export default router