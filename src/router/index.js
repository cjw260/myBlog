import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index-layout.vue'
import Home from '@/views/Home/index-home.vue'
import Article from '@/views/Article/index-article.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path:'/',
    component: Layout,
    children:[
      {path:'',component: Home},
      {path:'article/:id',component:Article}
    ]

    
  }],
})

export default router
