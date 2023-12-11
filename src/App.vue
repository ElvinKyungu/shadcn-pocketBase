
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

import PocketBase from 'pocketbase';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router);

interface User {
  mail: string | null;
  password: string | null;
}

const isLogin = ref(false);
const errorMessage = ref('');

const user = ref<User>({
  mail: null,
  password: null,
});

const pb = new PocketBase('https://bat-her.pockethost.io');
const message = ref('Connectez-vous d\'un simple geste');

const loginUser = async () => {
  try {
    isLogin.value = true; // Activer la barre de progression
    const result = await pb.collection('users').authWithPassword(
      user.value.mail || '',
      user.value.password || '',
    );
    console.log(result);
    message.value = 'Connecté avec succès!';
    router.push('/user')
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    errorMessage.value = 'Erreur de connexion. Veuillez réessayer.'; 
  } finally {// Désactiver la barre de progression après l'authentification ou en cas d'erreur
  }
};

</script>

<template>
  <div>
    <div class="h-screen relative flex items-center justify-center">
      <Card class="w-[35rem] border-2">
        <CardText>
          <router-link to="/user">Go to user page</router-link>
        </CardText>
        <CardHeader class="space-y-1">
          <CardTitle class="text-2xl">
            {{ message }}
          </CardTitle>
          <CardDescription class="text-base">
            Saisissez votre email pour vous connecter
          </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid grid-cols-2 gap-6">
            <Button class="text-lg p-7" variant="outline">
              <GitHubIcon class="h-4 w-4" />
              Github
            </Button>
            <Button class="text-lg p-7" variant="outline">
              <svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
                <path
                  fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                />
              </svg>
              Google
            </Button>
          </div>
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-background px-2 text-muted-foreground text-lg">
                Ou continuer avec
              </span>
            </div>
          </div>
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
          <Button class="w-full" @click="loginUser">
            Connectez-vous
          </Button>
        </CardFooter>
      </Card>
    </div>
    <router-view></router-view>
  </div>
</template>