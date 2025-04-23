<template>
  <nav class="bg-white border-b border-gray-200 shadow-sm mb-5">
    <div class="mx-auto px-4">
      <div class="flex h-16 justify-center items-center">
        <!-- Desktop Nav Links -->
        <div class="hidden md:flex space-x-6">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/wood-fired-pizza">Wood Fired Pizza</router-link>
          <router-link to="/bbq">BBQ</router-link>
          <router-link to="/contact">Contact Us</router-link>
        </div>

        <!-- Hamburger Menu Button -->
        <div class="md:hidden flex w-full justify-end">
          <button
            @click="isOpen = !isOpen"
            class="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
          >
            <!-- Top bar -->
            <span
              class="absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out"
              :class="isOpen ? 'rotate-45' : '-translate-y-2'"
            ></span>

            <!-- Middle bar -->
            <span
              class="absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out"
              :class="isOpen ? 'opacity-0' : 'opacity-100'"
            ></span>

            <!-- Bottom bar -->
            <span
              class="absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out"
              :class="isOpen ? '-rotate-45' : 'translate-y-2'"
            ></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pt-2 pb-4 space-y-1">
      <router-link @click="isOpen = false" to="/" class="block">Home</router-link>
      <router-link @click="isOpen = false" to="/about" class="block">About</router-link>
      <router-link @click="isOpen = false" to="/wood-fired-pizza" class="block"
        >Wood Fired Pizza</router-link
      >
      <router-link @click="isOpen = false" to="/bbq" class="block">BBQ</router-link>
      <router-link @click="isOpen = false" to="/contact" class="block">Contact Us</router-link>
    </div>
  </nav>

  <img alt="Logo" src="/img/logo.png" class="main-logo pb-10" />
  <router-view />
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
