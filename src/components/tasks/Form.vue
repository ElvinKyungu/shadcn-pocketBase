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

onMounted(async() => {
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

const data = {
    "name": "Je veux ce truc à tout prix",
    "status": "done",
    "updatedAt": " 2022-01-01 10:00:00.123Z",
    "userID": "4w3769t9z89ff0p"
};
const addTask = async()=>{
  try{
    const record = await pb.collection('tasks').create(data);
    console.log(record);
    
  }catch (error){
    console.log("Une erreur s'est produite "+ error);
    
  }
  
}
</script>

<template>
  <form @submit.prevent="addTask" class="flex flex-col gap-5">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem class="flex flex-col gap-1">
        <div>
          <FormLabel class="mb-3 text-lg">Task name</FormLabel>
          <FormControl>
            <Input 
              v-model="name"
              class="p-7 text-lg" 
              type="text" 
              placeholder="Ajouter une tâche..." v-bind="componentField" />
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