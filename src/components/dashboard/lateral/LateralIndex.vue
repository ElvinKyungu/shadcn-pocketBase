<template>
  <div class="px-6 py-8">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-3xl p-8 mb-5">
        <LateralHeader/>
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
import { Ref, ref, defineProps, watch } from 'vue';
export interface Task {
  id: string;
  name: string;
  status: string;
  userID: string;
  updatedAt: string | null;
}

interface TableProps {
  tasks: Ref<Task[]>;
}
const props = defineProps<TableProps>();
const isLoading = ref<boolean>(!props.tasks || props.tasks.value.length === 0);
//const showModal: Record<string, boolean> = {};


watch(() => props.tasks, () => {
  isLoading.value = !props.tasks || props.tasks.value.length === 0;
}, { immediate: true });

//const toggleModal = (taskId: string) => {
//  showModal[taskId] = !showModal[taskId];
//  console.log(showModal[taskId]);
//};

//const areDataReady = computed(() => !isLoading.value);
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>