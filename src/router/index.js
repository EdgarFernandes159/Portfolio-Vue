import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Projects from '../views/Projects.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
