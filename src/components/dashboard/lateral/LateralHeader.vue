<template>
  <div>
    <h1 class="text-3xl font-bold mb-10">Project with PocketBase and Shadcn</h1>
    <div class="flex items-center justify-between">
      <div class="flex items-stretch">
        <div class="text-gray-500 text-xs">Utilisateur<br>connecté</div>
        <div class="h-100 border-l mx-4"></div>
        <div class="flex flex-nowrap -space-x-3">
          <div class="h-9 w-9">
            <img class="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random">
          </div>
        </div>
      </div>
      <div class="flex items-center gap-x-2">
        <button 
          type="button" 
          class="
            inline-flex items-center justify-center py-3 px-3 rounded-xl 
            border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
          </svg>
        </button>
        <button 
          @click="shoModalAddTask()"
          type="button" 
          class="
            inline-flex items-center justify-center px-5 rounded-xl py-3
            bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition
          "
        >
          Ajouter une tâche
        </button>
      </div>
    </div>
    <hr class="my-10">
    <transition>
      <LateralAddTask v-if="showModal" @close-modal="closeModalHandler" />
    </transition>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
import LateralAddTask from '@/components/dashboard/lateral/LateralAddTask.vue'

const showModal = ref(false)
const shoModalAddTask = ()=>{
  showModal.value = !showModal.value;
}
const closeModalHandler = () => {
  showModal.value = false;
};
</script>