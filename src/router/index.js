import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index-layout.vue'
import Home from '@/views/Home/index-home.vue'
import Article from '@/views/Article/index-article.vue'
import Categories from '@/views/Categories/index-categories.vue'
import Tags from '@/views/Tags/index-tags.vue'
import Subcategories from '@/views/Subcategories/index-subcategories.vue'
import Subtags from '@/views/Subtags/index-subtags.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path:'/',
    component: Layout,
    children:[
      {path:'',component: Home},
      {path:'article/:id',component:Article},
      {path:'categories',component:Categories},
      {path:'tags',component:Tags},
      {path:'categories/:name',component:Subcategories},
      {path:'tags/:name',component:Subtags}
    ]

    
  }],
})

export default router
