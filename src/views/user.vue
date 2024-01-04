<template>
  <div class="w-full relative">
    <Header/>
    <div class="w-[100wh]">
      f
      <TaskIndex/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/store';
import TaskIndex from '@/components/tasks/TaskIndex.vue'
import Header from '@/components/header/Index.vue'

const userStore = useUserStore();

</script>