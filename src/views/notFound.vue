<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Quelque chose ne va pas...
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Désolé, nous ne trouvons pas cette page. Vous trouverez beaucoup de choses à explorer sur la page d'accueil. 
          </p>
          <Button 
            class="text-lg"
          >
            <router-link 
              to="/" 
              class="
                inline-flex text-white bg-primary-600
                focus:outline-none font-medium 
                rounded-lg text-sm text-center hover:text-white
              "
            >
              Retour à la page d'accueil
            </router-link>
          </Button>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>
<script setup lang="ts">
</script>