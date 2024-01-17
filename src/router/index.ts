import homeView from '@/views/homeView.vue'
import singleView from '@/views/cardDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'
import newChampionView from '@/views/newChampionView.vue'
import editView from '@/views/editView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/:id',
      name: 'singleview',
      component: singleView
    },
    {
      path: '/newchampion',
      name: 'newChampion',
      component: newChampionView
    },
    {
      path: '/editchampion/:id',
      name: 'editChampion',
      component: editView
    }
  ]
})

export default router
