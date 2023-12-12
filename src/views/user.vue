<template>
  <h1>Bienvenue, {{ userStore.name }}!</h1>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/store';

const userStore = useUserStore();

onMounted(() => {
  userStore.restoreUserData();
});
</script>