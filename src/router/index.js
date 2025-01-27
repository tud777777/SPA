import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegView from "@/views/RegView.vue";
import AuthView from "@/views/AuthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/registration',
      name: 'Reg',
      component: RegView,
    },
    {
      path: '/authorization',
      name: 'Auth',
      component: AuthView,
    },
  ],
})

export default router
