<template>
  <div class="container py-10 mx-auto">
    <Form/>
    <TaskContent :columns="columns" :data="data" class="mt-46"/>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { columns } from "@/components/tasks/columns"
import type { Payment } from '@/components/tasks/columns';
import TaskContent from "@/components/tasks/TaskContent.vue"
import Form from "@/components/tasks/Form.vue"

const data = ref<Payment[]>([])

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

onMounted(async () => {
  data.value = await getData();
});
</script>