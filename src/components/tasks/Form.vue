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
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/store';

const userStore = useUserStore();

const pb = new PocketBase('https://bat-her.pockethost.io');

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

const newTask = ref({
  name: '',
  status: 'draft',
  userID: '', 
  updatedAt: null,
});

const userID = userStore.$state.userID;

const addTask = async()=>{
  if (userID !== null) {
    newTask.value.userID = userID;
    try {
      const record = await pb.collection('tasks').create(newTask.value);
      console.log(record);
    } catch (error) {
      console.log("Une erreur s'est produite " + error);
    }
  } else {
    console.error("Impossible d'ajouter une tâche sans ID d'utilisateur.");
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
              v-model="newTask.name"
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