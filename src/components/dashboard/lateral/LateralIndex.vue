<template>
  <div class="px-6 py-8">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-3xl p-8 mb-5">
        <LateralHeader/>
        <Transition v-if="showLateralItem" name="fade" mode="out-in">
          <component :is="getDynamicComponent(props.itemId)"/>
        </Transition>
        <div 
          v-else
          class="grid grid-cols-2 gap-x-20"
        >
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
import LateralFunTask from '@/components/dashboard/lateral/category/LateralFunTask.vue';
import LateralHomeworkTask from '@/components/dashboard/lateral/category/LateralHomeworkTask.vue';
import LateralImportantTask from '@/components/dashboard/lateral/category/LateralImportantTask.vue';
import LateralProject from '@/components/dashboard/lateral/category/LateralProject.vue';
import LateralTaskList from '@/components/dashboard/lateral/category/LateralTaskList.vue';
import { ref, defineProps, watch } from 'vue';

const props = defineProps(['itemId']);

const showLateralItem = ref(true)
const getDynamicComponent = (itemId: string) => {
  showLateralItem.value = true;
  switch (itemId) {
    case 'accueil':
      showLateralItem.value = false;
      return  null;
      case 'tasklist':
      return  LateralTaskList;
    case 'project':
      return LateralProject;
    case 'fun':
      return LateralFunTask;
    case 'important':
      return LateralImportantTask;
    case 'homework':
      return LateralHomeworkTask;
    default:
      return { template: '<p>Aucun composant correspondant à cet ID</p>' };
  }
};
watch(() => props.itemId, () => {
  showLateralItem.value = true;
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
