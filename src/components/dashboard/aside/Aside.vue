<template>
  <div class="flex flex-col justify-between h-full">
    <div class="flex-grow">
      <div class="px-4 py-7 text-center border-b">
        <h1 class="text-xl font-bold leading-none"><span class="text-yellow-700">Task Manager</span> App</h1>
      </div>
      <div class="p-4">
        <ul class="space-y-1">
          <li v-for="item in sidebarItems" :key="item.id">
            <button class="sidebar_item" @click="handleItemClick(item)">
              <svg :xmlns="item.svgNamespace" :width="item.svgWidth" :height="item.svgHeight" :fill="item.svgFill" class="text-lg mr-4" :viewBox="item.svgViewBox">
                <path :d="item.svgPath"/>
              </svg>
              {{ item.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-4">
      <button 
        @click="logoutUser"
        type="button" 
        class="
          inline-flex w-full items-center justify-center h-9 px-4 rounded-xl
          bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="" viewBox="0 0 16 16">
          <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        <span class="font-bold text-sm ml-2">Logout</span>
      </button> 
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/store';
import { useRouter } from 'vue-router'
import { defineEmits } from "vue";

const userStore = useUserStore();
const router = useRouter();

const emits = defineEmits();
const logoutUser = () => {
  userStore.clearUserData();
  router.push('/'); 
}


const sidebarItems = [
  {
    id: 'tasklist',
    label: 'Task List',
    svgNamespace: 'http://www.w3.org/2000/svg',
    svgWidth: '1em',
    svgHeight: '1em',
    svgFill: 'currentColor',
    svgViewBox: '0 0 16 16',
    svgPath: 'M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z',
  },
  {
    id: 'project',
    label: 'Projects',
    svgNamespace: 'http://www.w3.org/2000/svg',
    svgWidth: '1em',
    svgHeight: '1em',
    svgFill: 'currentColor',
    svgViewBox: '0 0 16 16',
    svgPath: 'M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z',
  },
  {
    id: 'fun',
    label: 'Fun',
    svgNamespace: 'http://www.w3.org/2000/svg',
    svgWidth: '1em',
    svgHeight: '1em',
    svgFill: 'currentColor',
    svgViewBox: '0 0 16 16',
    svgPath: 'M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z',
  },
  {
    id: 'important',
    label: 'Important',
    svgNamespace: 'http://www.w3.org/2000/svg',
    svgWidth: '1em',
    svgHeight: '1em',
    svgFill: 'currentColor',
    svgViewBox: '0 0 16 16',
    svgPath: 'M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
  },
  {
    id: 'homework',
    label: 'Home work',
    svgNamespace: 'http://www.w3.org/2000/svg',
    svgWidth: '1em',
    svgHeight: '1em',
    svgFill: 'currentColor',
    svgViewBox: '0 0 16 16',
    svgPath: 'M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z',
  }
];
const handleItemClick = (item: any) => {
  console.log(`Clicked on ${item.label}`);
};
</script>