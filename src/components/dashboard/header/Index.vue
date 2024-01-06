<script setup lang="ts">
import Navigation from './Navigation.vue'
import NavigationLogo from './NavigationLogo.vue'

</script>

<template>
  <header class="bg-yellow-50 py-3 px-4">
    <div class="mx-auto">
      <div class="flex items-center justify-between">
        <NavigationLogo/>
        <Navigation/>
      </div>
    </div>
  </header>
</template>