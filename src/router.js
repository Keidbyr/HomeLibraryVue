import { createRouter, createWebHistory } from 'vue-router'
import Items from '@/components/items.vue'
import BookItem from '@/components/BookItem.vue'
import About from '@/components/About.vue'
import Copies from '@/components/Copies.vue'
const routes = [
  {
    path: '/',
    component: About,
  },
  {
    path: '/items',
    component: Items,
  },
  {
    path: '/items/:id',
    component: BookItem,
  },
  {
    path: '/copies',
    component: Copies,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
