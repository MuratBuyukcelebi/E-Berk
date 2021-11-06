import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },

  {
    path: '/onboarding',
    name: 'Onboarding',
    component: () => import('../views/Onboarding.vue'),
  },

  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue'),
  },

  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },

  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue'),
  },

  {
    path: '/started',
    name: 'Started',
    component: () => import('../views/Started.vue'),
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword'),
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
