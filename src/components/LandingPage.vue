<template>
  <div class="flex flex-col items-center justify-center bg-white text-center">
    <!-- Logo Image -->
    <img
      src="/img/logo.png"
      alt="Big Bear's BBQ Logo"
      class="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto animate-fade-in pt-10"
    />

    <!-- Welcome Text -->
    <BaseHeader>Hello, Welcome to Big Bears BBQ Pizza &amp; Grill </BaseHeader>
    <router-link to="/menu">
      <button
        class="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-2xl shadow-lg cursor-pointer hover:bg-red-700 transition duration-300"
        router-link="menu"
      >
        View Our Menu
      </button>
    </router-link>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>

<script>
import BaseHeader from '@/components/Base/BaseHeader.vue'

export default {
  name: 'HomePage',
  components: {
    BaseHeader,
  },
}
</script>
