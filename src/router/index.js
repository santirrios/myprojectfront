import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: () => import( '../views/Registrarse.vue')
  },
  {
    path: '/iniciosesion',
    name: 'iniciosesion',
    component: () => import( '../views/InicioSesion.vue')
  },
  {
    path: '/ventas',
    name: 'ventas',
    component: () => import( '../views/Ventas.vue')
  },
  {
    path: '/listventas',
    name: 'listventas',
    component: () => import( '../views/ListVentas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
