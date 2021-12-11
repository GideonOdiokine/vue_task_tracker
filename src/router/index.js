import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    ath: '/',
    name: 'Home',
    component: Home
  },
  {
    ath: '/add',
    name: 'AddProject',
    component: AddProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
