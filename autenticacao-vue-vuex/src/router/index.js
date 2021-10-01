import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      public: false
    }
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: () => import('../views/Gerentes.vue'),
    meta: {
      public: false
    }
  },
  {
    path: '/cadastro',
    name: 'cadastroUsuario',
    component: () => import( /*webpackChunckName: "register" */ '../views/UsuarioCadastro'),
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
    meta: {
      public: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.public && !store.state.token) {
    return next({ path: '/login' })
  }
  next()
})

export default router
