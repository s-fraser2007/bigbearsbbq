<template>
  <section class="max-w-4xl mx-auto px-4 py-10">
    <BaseHeader>Dashboard</BaseHeader>
    <p>Welcome to the dashboard, you can upload the latest menu here...</p>
    <div class="grid grid-cols-1">
      <div>
        <label for="image" class="block font-medium text-sm text-gray-700">
          Image <span class="text-red-500">*</span>
        </label>
        <input
          type="file"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
          @change="handleFileUpload"
          required
        />
      </div>
    </div>
    <div v-if="imageUrl" class="mt-2">
      <img :src="imageUrl" alt="Uploaded" class="max-w-full" />
    </div>
    <div class="md:col-span-3 text-right">
      <button @click="logout" class="big-bear-button px-6 py-2 rounded-md mt-4">Logout</button>
    </div>
  </section>
</template>

<script>
import BaseHeader from '@/components/Base/BaseHeader.vue'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default {
  name: 'LoginPage',
  components: {
    BaseHeader,
  },
  data() {
    return {
      imageUrl: null,
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.imageUrl = URL.createObjectURL(file)
      }
    },
    async logout() {
      await signOut(auth)
      this.$router.replace('/')
    },
  },
}
</script>
