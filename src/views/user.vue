<template>
  <div class="w-full">
    <Header/>
    <div class="flex justify-between relative ">
      <Aside />
      <div class="flex justify-start w-[80%] mt-24">
        <h1>HH</h1>
      </div>
      <!--<TaskIndex/> --> 
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/store';
//import TaskIndex from '@/components/tasks/TaskIndex.vue'
import Aside from '@/components/dashboard/aside/Aside.vue'
import Header from '@/components/header/Index.vue'

const userStore = useUserStore();
console.log(userStore)
</script>