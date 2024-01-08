<template>
  <div class="
    flex justify-center fixed top-1/2 left-1/2 z-50 h-screen w-full transform -translate-x-1/2 
    -translate-y-1/2 bg-black/5">
    <div  
      tabindex="-1" 
      aria-hidden="true" 
      class="
        overflow-y-none overflow-x-hidden w-full
        justify-center items-center flex bg-black/50
      "
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
            <button 
              @click="closeModal"
              type="button" 
              class="
                text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center 
                items-center dark:hover:bg-gray-600 dark:hover:text-white
              "
              data-modal-hide="default-modal"
            >
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5 space-y-4">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
            </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
          <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              @click="addTask" 
              data-modal-hide="default-modal" 
              type="button" 
              class="
                text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800
              "
            >
              I accept
            </button>
            <button 
              @click="closeModal"
              data-modal-hide="default-modal" 
              type="button" 
              class="
                ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 
                focus:outline-none focus:ring-blue-300 rounded-lg border 
                border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 
                focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 
                dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600
              "
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from "vue";

const emits = defineEmits();

const closeModal = () => {
  emits("close-modal");
};
const addTask = ()=>{

}
</script>