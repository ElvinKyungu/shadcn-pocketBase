
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
    <div 
      v-if="!isLogin"
      class="h-screen relative flex items-center justify-center">
      <Card class="w-[35rem] border-2">
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
    <div role="status" v-if="isLogin">
      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>