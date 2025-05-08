import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

// Views
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WoodFiredPizzaView from '@/views/WoodFiredPizzaView.vue'
import BbqView from '@/views/BbqView.vue'
import ContactView from '@/views/ContactView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

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
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
  ],
})

// A function that returns a Promise based on auth state
function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe() // prevent multiple triggers
        resolve(user)
      },
      reject,
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth) {
    const user = await getCurrentUser()
    if (!user) {
      alert('You must be signed in to view the dashboard!')
      next('/')
    }
  }

  next()
})

export default router
