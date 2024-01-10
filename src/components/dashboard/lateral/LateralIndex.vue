<template>
  <div class="px-6 py-8">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-3xl p-8 mb-5">
        <LateralHeader/>
        <component :is="getDynamicComponent(props.itemId)"/>
        <div class="grid grid-cols-2 gap-x-20">
          <LateralStats/>
          <LateralNotifications/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//import Spinner from '@/components/Spinner.vue';
import LateralStats from '@/components/dashboard/lateral/LateralStats.vue';
import LateralNotifications from '@/components/dashboard/lateral/LateralNotifications.vue';
import LateralHeader from '@/components/dashboard/lateral/LateralHeader.vue';
import { defineProps } from 'vue';

const props = defineProps(['itemId']);

const getDynamicComponent = (itemId: string) => {
  switch (itemId) {
    case 'tasklist':
      return LateralStats;
    case 'project':
      return LateralNotifications;
    case 'fun':
      return LateralNotifications;
    case 'important':
      return LateralNotifications;
    case 'homework':
      return LateralNotifications;
    default:
      return { template: '<p>Aucun composant correspondant à cet ID</p>' };
  }
};

</script>
