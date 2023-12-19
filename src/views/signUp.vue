<template>
    <div>
      <div 
        class="h-screen relative flex items-center justify-center"
      >
        <Card class="w-[35rem] border-2">
          <CardHeader class="space-y-1">
            <CardTitle class="text-2xl">
              Inscrivez-vous
            </CardTitle>
            <CardDescription class="text-base">
              Deux, trois mouvement, inscrivez-vous
            </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email" class="text-lg">Email</Label>
              <Input 
                v-model="user.mail"
                class="p-7 focus:outline-none text-lg" 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
              />
            </div>
            <div class="grid gap-2">
              <Label for="password">Mot de passe</Label>
              <Input
                v-model="user.password"
                class="p-7 focus:outline-none text-lg" 
                id="password" 
                type="password" 
                placeholder="Your password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              class="w-full p-7 text-lg" 
              @click="loginUser"
              :class="{ 'pointer-events-none': isLogin, 'cursor-not-allowed': isLogin }"
            >
              <Spinner v-if="isLogin"/>
              <span v-else>Connectez-vous</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
</template>
  
<script setup lang="ts">
  import { Button } from '@/components/ui/button';
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Input } from '@/components/ui/input';
  import Spinner from '@/components/Spinner.vue';
  import PocketBase from 'pocketbase';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/store';
  
  const router = useRouter()
  const userStore = useUserStore();
  
  interface newUser {
    username: string | null;
    mail: string | null;
    emailVisibility: true;
    password: string | null;
    passwordConfirm: string | null;
    name: string | null;
  }
  
  const isLogin = ref(false);
  const errorMessage = ref('');
  
  const newUser = ref<newUser>({
    username: null,
    mail: null,
    emailVisibility: true,
    password: null,
    passwordConfirm: null,
    name: null,
  });
  const pb = new PocketBase('https://bat-her.pockethost.io');
  
  const loginUser = async () => {
    try {
      isLogin.value = true; 
      const result = await pb.collection('users').authWithPassword(
        user.value.mail || '',
        user.value.password || '',
      );
      console.log(result);
      message.value = 'Connecté avec succès!';
      userStore.setUserData({ userID: result.record.id, name: result.record.name, token: result.token });
      router.push('/user')
    } catch (error) {
      isLogin.value = false; 
      console.error('Erreur lors de la connexion', error);
      errorMessage.value = 'Erreur de connexion. Veuillez réessayer.'; 
    } finally {
      isLogin.value = false; 
    }
  };
</script>