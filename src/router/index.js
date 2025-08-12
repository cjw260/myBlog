import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index-layout.vue'
import Home from '@/views/Home/index-home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path:'/',
    component: Layout,
    children:[
      {path:'',component: Home}
    ]

    
  }],
})

export default router
