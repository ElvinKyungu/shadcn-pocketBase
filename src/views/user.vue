<template>
  <h1>Bienvenue, {{ userStore.name }}!</h1>
  <button @click="logoutUser">Déconnexion</button>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/store';
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const router = useRouter();

const logoutUser = () => {
  userStore.clearUserData();
  router.push('/'); 
}
onMounted(() => {
  if (!userStore.token) {
    router.push('/'); // Remplacez '/login' par le chemin de votre page de connexion
  }
  userStore.restoreUserData();
});
</script>