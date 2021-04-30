import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Userindex from '../views/user/index'
import AddOrUpdate from '../views/user/addOrUpdate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Userindex
  },
  {
    path: '/addOrUpdate',
    name: 'addOrUpdate',
    component: AddOrUpdate
  },
  // {
  //   path: '/user/index',
  //   name: 'user',
  //   component: Userindex
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
