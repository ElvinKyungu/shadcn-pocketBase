<template>
  <div class="container py-10 mx-auto">
    <Form/>
    <TaskContent :columns="columns" :data="data" class="mt-46"/>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { columns } from "@/components/tasks/columns"
import type { Payment } from '@/components/tasks/columns';
import TaskContent from "@/components/tasks/TaskContent.vue"
import Form from "@/components/tasks/Form.vue"

const data = ref<Payment[]>([])

</script>