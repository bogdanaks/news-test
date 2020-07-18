import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import News from '../views/News.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'

import store from '../store'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: ifAuthenticated
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
