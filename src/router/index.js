import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegView from "@/views/RegView.vue";
import AuthView from "@/views/AuthView.vue";
import UpdateView from "@/views/UpdateView.vue";
import AccessView from "@/views/AccessView.vue";
import ChAccessView from "@/views/ChAccessView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta:{
        forAuth:true,
      }
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
    {
      path: '/update/:id',
      name: 'Update',
      component: UpdateView,
      meta:{
        forAuth:true,
      }
    },
    {
      path: '/access',
      name: 'Access',
      component: AccessView,
      meta:{
        forAuth:true,
      }
    },
    {
      path: '/chaccess/:id',
      name: 'ChAccess',
      component: ChAccessView,
      meta:{
        forAuth:true,
      }
    },
  ],
})
router.beforeResolve(async to =>{
  if(to.meta.forAuth && !localStorage.getItem('token'))
  {
    await router.replace('/authorization')
  }
})
export default router
