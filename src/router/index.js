import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WoodFiredPizzaView from '@/views/WoodFiredPizzaView.vue'
import BbqView from '@/views/BbqView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      component: AboutView,
    },
    {
      path: '/wood-fired-pizza',
      component: WoodFiredPizzaView,
    },
    {
      path: '/bbq',
      component: BbqView,
    },
    {
      path: '/contact',
      component: ContactView,
    },
  ],
})

export default router
