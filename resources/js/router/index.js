import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/pages/auth/Login.vue')
const Register = () => import('@/pages/auth/Register.vue')

/* Layouts */
const Default = () => import('@/layouts/Default.vue')

/* Authenticated Component */
const Dashboard = () => import('@/pages/Dashboard.vue')
const Users = () => import('@/pages/Users.vue')
const User = () => import('@/pages/User.vue')
const Profile = () => import('@/pages/Profile.vue')
const Bdsm = () => import('@/pages/Bdsm.vue')
const Anuncios = () => import('@/pages/Anuncios.vue')

const PoliticaPrivacidade = () => import('@/pages/PoliticaPrivacidade.vue')

const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Maior Portal do Fetish`,
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
                    title: `Maior Portal do Fetish`
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
                name: 'user',
                path: '/usuario/:id',
                props: true,
                component: User,
                meta: {
                    title: `Maior Portal do Fetish`
                }
            },
            {
                name: 'profile',
                path: '/profile',
                component: Profile,
                meta: {
                    title: `Profile`
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
                path: '/comunidades/bdsm',
                component: Bdsm,
                meta: {
                    title: `BDSM`,
                    transition: 'slide-left'
                }
            },
            {
                name: 'politica_de_privacidade',
                path: '/politica_de_privacidade',
                component: PoliticaPrivacidade,
                meta: {
                    title: `Política de Privacidade`
                }
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 }
        }

    }
})

router.beforeEach((to, from, next) => {
    document.title = `Fetita | ${to.meta.title}`;
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
export default router;