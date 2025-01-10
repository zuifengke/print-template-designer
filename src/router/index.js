// import Vue from 'vue'
// import VueRouter from 'vue-router'
//
// Vue.use(VueRouter)
//
// const routes = []
//
// const router = new VueRouter({
//   mode: 'history',
//   base: '/',
//   routes: routes
// })
//
// export default router
import { createRouter,createWebHistory }  from 'vue-router'

const routes = []

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes: routes
})

export default router
