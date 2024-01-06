<template>
  <div class="w-full">
    <Header/>
    <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
      <Aside/>
    </aside>
    <main class="pt-16 max-h-screen overflow-auto">
      <LateralIndex/>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/store';
import Aside from '@/components/dashboard/aside/Aside.vue'
import Header from '@/components/dashboard/header/Index.vue'
import LateralIndex from '@/components/dashboard/lateral/LateralIndex.vue';

const userStore = useUserStore();
console.log(userStore)
</script>