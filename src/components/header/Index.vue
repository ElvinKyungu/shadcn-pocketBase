<script setup lang="ts">
import Navigation from './Navigation.vue'
import NavigationLogo from './NavigationLogo.vue'

</script>

<template>
  <header class="fixed inset-0 w-full h-20 flex py-4 border-b border-gray-300 shadow-md px-20">
    <NavigationLogo/>
    <Navigation/>
  </header>
</template>