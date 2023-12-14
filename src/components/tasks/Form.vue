<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import PocketBase from 'pocketbase';
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { onMounted} from 'vue'

const pb = new PocketBase('https://bat-her.pockethost.io');

console.log(pb);

onMounted(async()=>{
  try {
    const records = await pb.collection('tasks').getFullList({
      sort: '-created',
    });
    console.log(records);
   
  } catch (error) {
    console.log(error);
    
  } finally {
  }
})
const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-5">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem class="flex flex-col gap-1">
        <div>
          <FormLabel class="mb-3 text-lg">Task name</FormLabel>
          <FormControl>
            <Input class="p-7 text-lg" type="text" placeholder="Ajouter une tâche..." v-bind="componentField" />
          </FormControl>
        </div>
        <FormMessage class="flex" />
      </FormItem>
    </FormField>
    <Button 
      @click="addTask()"
      type="submit" 
      class="flex w-full p-7 text-lg"
    >
      Ajouter
    </Button>
  </form>
</template>