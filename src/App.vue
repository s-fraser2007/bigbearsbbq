<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/wood-fired-pizza">Wood Fired Pizza</router-link> |
    <router-link to="/bbq">BBQ</router-link> |
    <router-link to="/contact">Contact Us</router-link>
  </nav>
  <img alt="Logo" src="/img/logo.png" class="main-logo" />
  <router-view />
</template>

<style>
#app {
  font-family: 'Finger Paint', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #cd214f;
}

.main-logo {
  width: calc(100vw / 6);
}

@media only screen and (max-width: 600px) {
  .main-logo {
    width: 0 calc(100vw / 4);
  }
}
</style>
