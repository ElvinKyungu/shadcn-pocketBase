<template>
  <div class="w-full">
    <Header/>
    <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
      <Aside @sidebar-item-clicked="handleSidebarItemClicked"/>
    </aside>
    <main class="pt-16 max-h-screen overflow-auto">
      <LateralIndex :itemId="selectedSidebarItemId"/>
    </main>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { useUserStore } from '@/stores/store';
import Aside from '@/components/dashboard/aside/Aside.vue'
import Header from '@/components/dashboard/header/Index.vue'
import LateralIndex from '@/components/dashboard/lateral/LateralIndex.vue';

const userStore = useUserStore();
console.log(userStore)
const selectedSidebarItemId = ref(null);

const handleSidebarItemClicked = (itemId: string) => {
  console.log(`Sidebar item clicked with id: ${itemId}`);
  selectedSidebarItemId.value = itemId;
};
</script>