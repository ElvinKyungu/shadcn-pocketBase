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
            <div class="flex flex-row gap-4">
              <div class="grid gap-2">
                <Label for="name" class="text-lg text-left">Nom</Label>
                <Input 
                  v-model="newUser.name"
                  class="p-7 focus:outline-none text-lg" 
                  id="name" 
                  type="text" 
                  placeholder="Jonathan Dilengu" 
                />
              </div>
              <div class="grid gap-2">
                <Label for="username" class="text-lg text-left">Username</Label>
                <Input 
                  v-model="newUser.username"
                  class="p-7 focus:outline-none text-lg" 
                  id="username" 
                  type="text" 
                  placeholder="johndoe" 
                />
              </div>
            </div>
            <div class="grid gap-2">
              <Label for="mail" class="text-left">E-mail</Label>
              <Input
                v-model="newUser.email"
                class="p-7 focus:outline-none text-lg" 
                id="mail" 
                type="email" 
                placeholder="e@example.com"
              />
            </div>
            <div class="grid gap-2">
              <Label for="password" class="text-left">Mot de passe</Label>
              <Input
                v-model="newUser.password"
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
              @click="signupUser()"
              :class="{ 'pointer-events-none': isLogin, 'cursor-not-allowed': isLogin }"
            >
              <Spinner v-if="isLogin"/>
              <span v-else>Inscrivez-vous</span>
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
  import {pb} from '@/pocketbase/pocket';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/store';
  
  const router = useRouter()
  const userStore = useUserStore();
  
  interface newUser {
    username: string | null;
    email: string | null;
    emailVisibility: true;
    password: string | null;
    passwordConfirm: string | null;
    name: string | null;
  }
  
  const isLogin = ref(false);
  const errorMessage = ref('');
  
  const newUser = ref<newUser>({
    username: null,
    email: null,
    emailVisibility: true,
    password: null,
    passwordConfirm: null,
    name: null,
  });
  
  const signupUser = async () => {
    newUser.value.passwordConfirm = newUser.value.password;
    try {
      isLogin.value = true; 
      const result = await pb.collection('users').create(newUser.value);
      console.log(result);
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