<template>
  <h1>Bienvenue, {{ userStore.name }}!</h1>
</template>
<script lang="ts" setup>
  import { useUserStore } from '@/stores/store';

  const userStore = useUserStore();
</script>