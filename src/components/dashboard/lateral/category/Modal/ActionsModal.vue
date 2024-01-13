<template>
  <div class="
  flex justify-center fixed top-1/2 left-1/2 z-40 min-h-screen w-full transform -translate-x-1/2 
  -translate-y-1/2 bg-black/5">
    <div class="
    flex justify-center fixed top-1/2 left-1/2 z-40 min-h-screen w-full transform -translate-x-1/2 
    -translate-y-1/2 bg-black/5" @click="closeModal = !closeModal">

    </div>
    <div
      tabindex="-1" 
      aria-hidden="true" 
      class="
        overflow-y-none overflow-x-hidden w-full
        justify-center items-center flex bg-black/50
      "
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full z-50">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const closeModal = ref(false)
</script>