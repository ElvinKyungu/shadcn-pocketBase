<template>
  <div>
    <h1>Bienvenue, {{ userStore.name }}!</h1>
    <button @click="logoutUser">Déconnexion</button>
    <DataTable/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/store';
import { useRouter } from 'vue-router'
import DataTable from '@/components/tasks/DataTable.vue'

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