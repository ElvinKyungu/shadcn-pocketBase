<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
  import PocketBase from 'pocketbase';
  const pb = new PocketBase('https://bat-her.pockethost.io');
</script>