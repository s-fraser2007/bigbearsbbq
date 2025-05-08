<template>
  <section class="max-w-4xl mx-auto px-4 py-10">
    <BaseHeader>Login</BaseHeader>
    <p>Enter your credentials to login to the dashboard</p>
    <form @submit.prevent="login">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <label for="name" class="block font-medium text-sm text-gray-700">
            Email <span class="text-red-500">*</span>
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
            required
          />
        </div>
        <div>
          <label for="address" class="block font-medium text-sm text-gray-700">
            Password <span class="text-red-500">*</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
            required
          />
        </div>
        <div class="md:col-span-3 text-center">
          <button type="submit" class="big-bear-button px-6 py-2 rounded-md">Submit</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import BaseHeader from '@/components/Base/BaseHeader.vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export default {
  name: 'LoginPage',
  components: {
    BaseHeader,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      // Check if locked out
      const lockout = localStorage.getItem('lockoutUntil')
      if (lockout && Date.now() < parseInt(lockout)) {
        alert('Too many failed attempts. Try again later.')
        return
      }

      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
        localStorage.removeItem('loginAttempts')
        localStorage.removeItem('lockoutUntil')
        this.$router.push('/dashboard')
      } catch (error) {
        console.log(error)

        let attempts = parseInt(localStorage.getItem('loginAttempts')) || 0
        attempts++
        localStorage.setItem('loginAttempts', attempts)

        if (attempts >= 5) {
          const lockTime = Date.now() + 5 * 60 * 1000 // 5 minutes
          localStorage.setItem('lockoutUntil', lockTime)
          alert('Too many failed attempts. Locked for 5 minutes.')
        } else {
          alert(`Login failed. Attempts left: ${5 - attempts}`)
        }
      }
    },
  },
}
</script>
