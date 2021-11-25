import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Launch',
    component: () => import('../views/Launch.vue'),
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

  {
    path: '/verification',
    name: 'Verification',
    component: () => import('../views/Verification'),
  },

  {
    path: '/reset',
    name: 'NewPassword',
    component: () => import('../views/NewPassword'),
  },

  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info'),
  },

  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home'),
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
