<template>
  <div>
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
    <Transition>
      <LateralAddTask v-if="showModal" @close-modal="closeModalHandler" />
    </Transition>
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
<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}</style>