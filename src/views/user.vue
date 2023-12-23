<template>
  <div>
    <Header/>
    <h1>Bienvenue, {{ userStore.name }}!</h1>
    <Index/>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/store';
import Index from '@/components/tasks/Index.vue'
import Header from '@/components/header/Index.vue'

const userStore = useUserStore();

</script>