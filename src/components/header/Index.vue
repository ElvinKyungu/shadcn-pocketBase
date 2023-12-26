<script setup lang="ts">
import Navigation from './Navigation.vue'
import NavigationLogo from './NavigationLogo.vue'

</script>

<template>
  <header 
    class="
      fixed inset-0 w-full h-[5.6rem] flex 
      py-4 border-b border-gray-300 shadow-md 
      px-20 z-40 bg-white
    "
  >
    <NavigationLogo/>
    <Navigation/>
  </header>
</template>