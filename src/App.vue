<template>
  <nav class="bg-white border-b border-gray-200 shadow-sm mb-5 relative z-50">
    <div class="mx-auto px-4">
      <div class="flex h-16 items-center justify-between relative">
        <!-- Left: Logo -->
        <div class="flex items-center z-10">
          <router-link to="/" class="hover:text-red-600 font-semibold">
            <img src="/img/logo.png" alt="Big Bear's BBQ Logo" class="pt-5 pr-5 h-24 w-auto" />
          </router-link>
        </div>

        <!-- Center: Nav Links (Desktop) -->
        <div class="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <router-link to="/" class="hover:text-red-600 font-semibold">Home</router-link>
          <router-link to="/about" class="hover:text-red-600 font-semibold">About</router-link>
          <router-link to="/wood-fired-pizza" class="hover:text-red-600 font-semibold"
            >Wood Fired Pizza</router-link
          >
          <router-link to="/bbq" class="hover:text-red-600 font-semibold">BBQ</router-link>
          <router-link to="/contact" class="hover:text-red-600 font-semibold"
            >Contact Us</router-link
          >
        </div>

        <div class="hidden md:flex space-x-3 right-1/2 transform -translate-x-1/2">
          <router-link to="/login" class="hover:text-red-600 font-semibold">Login</router-link>
        </div>

        <!-- Right: Hamburger Icon -->
        <div class="md:hidden flex z-10">
          <!-- Hamburger Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 z-10"
          >
            <span
              :class="[
                'block h-0.5 w-6 bg-gray-800 transition-transform duration-300',
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '',
              ]"
            ></span>
            <span
              :class="[
                'block h-0.5 w-6 bg-gray-800 transition-opacity duration-300',
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100',
              ]"
            ></span>
            <span
              :class="[
                'block h-0.5 w-6 bg-gray-800 transition-transform duration-300',
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : '',
              ]"
            ></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Links -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white border-t border-gray-200"
    >
      <router-link
        @click="isMobileMenuOpen = false"
        to="/"
        class="block text-gray-700 font-medium hover:text-red-600"
        >Home</router-link
      >
      <router-link
        @click="isMobileMenuOpen = false"
        to="/about"
        class="block text-gray-700 font-medium hover:text-red-600"
        >About</router-link
      >
      <router-link
        @click="isMobileMenuOpen = false"
        to="/wood-fired-pizza"
        class="block text-gray-700 font-medium hover:text-red-600"
        >Wood Fired Pizza</router-link
      >
      <router-link
        @click="isMobileMenuOpen = false"
        to="/bbq"
        class="block text-gray-700 font-medium hover:text-red-600"
        >BBQ</router-link
      >
      <router-link
        @click="isMobileMenuOpen = false"
        to="/contact"
        class="block text-gray-700 font-medium hover:text-red-600"
        >Contact Us</router-link
      >
      <router-link
        @click="isMobileMenuOpen = false"
        to="/login"
        class="block text-gray-700 font-medium hover:text-red-600"
        >Login</router-link
      >
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>
