<template>
  <nav class="py-10">
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/wood-fired-pizza">Wood Fired Pizza</router-link> |
    <router-link to="/bbq">BBQ</router-link> |
    <router-link to="/contact">Contact Us</router-link>
  </nav>
  <img alt="Logo" src="/img/logo.png" class="main-logo pb-10" />
  <router-view />
</template>
