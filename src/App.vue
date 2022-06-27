<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <br />
  <router-link :to="{ name: 'home' }"> Home </router-link>
  |
  <router-link :to="{ name: 'about' }"> About </router-link>

  <router-view></router-view>
</template>

<style>
@import '@/styles/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #182b3e;
}
a {
  text-decoration: none;
}
</style>
