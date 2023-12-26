<template>
  <div>
    <Header/>
    <h1>Bienvenue, {{ userStore.name }}!</h1>
    <TaskIndex/>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/store';
import TaskIndex from '@/components/tasks/TaskIndex.vue'
import Header from '@/components/header/Index.vue'

const userStore = useUserStore();

</script>