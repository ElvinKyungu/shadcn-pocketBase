<template>
  <div>
    <Header/>
    <h1>Bienvenue, {{ userStore.name }}!</h1>
    <button @click="logoutUser" class="bg-transparent">Déconnexion</button>
    <Index/>
    
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/store';
import { useRouter } from 'vue-router'
import Index from '@/components/tasks/Index.vue'
import Header from '@/components/header/Index.vue'

const userStore = useUserStore();
const router = useRouter();

const logoutUser = () => {
  userStore.clearUserData();
  router.push('/'); 
}
onMounted(() => {
  userStore.restoreUserData();
  if (!userStore.token) {
    router.push('/'); // Remplacez '/login' par le chemin de votre page de connexion
  }
});
</script>