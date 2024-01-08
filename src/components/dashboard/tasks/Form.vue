<template>
  <form @submit.prevent="addTask" class="flex flex-col gap-5">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem class="flex flex-col gap-1">
        <div>
          <h1>{{ userStore.userID }}</h1>
          <FormLabel class="mb-3 text-lg">Task name</FormLabel>
          <FormControl>
            <Input 
              v-model="newTaskName"
              class="p-7 text-lg" 
              type="text" 
              placeholder="Ajouter une tâche..." 
              v-bind="componentField" 
            />
          </FormControl>
        </div>
        <FormMessage class="flex" />
      </FormItem>
    </FormField>
    <Button
      type="submit" 
      class="flex w-full p-7 text-lg"
    >
      <span v-if="!isSubmit">Ajouter</span>
      <Spinner v-else/>
    </Button>
  </form>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Spinner from '@/components/Spinner.vue'

const getAllTasks = async()=>{
  try {
    const records = await pb.collection('tasks').getFullList({
      sort: '-created',
    });
    console.log(records);
  } catch (error) {
    console.log(error);
  } finally {
  }
}
onMounted(()=> {
  getAllTasks();
})
const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})







</script>