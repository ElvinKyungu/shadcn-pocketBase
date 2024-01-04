<template>
  <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 w-[100%]">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <!-- Start coding here -->
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <!--<TaskHeaderContent />-->
        <!-- Passer le tableau directement -->
        <!--<Table :tasks="tasks" />-->
        <TaskFooterContent />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TaskHeaderContent from './TaskHeaderContent.vue';
import Table from './Table.vue';
import TaskFooterContent from './TaskFooterContent.vue';
import { pb } from '@/pocketbase/pocket';
import { ref, onMounted } from 'vue';

export interface Task {
  id: string; 
  name: string;
  status: string; 
  userID: string;
  updatedAt: string | null; 
}

const tasks = ref<Task[]>([]);

const getAllTasks = async() => {
  try {
    const records = await pb.collection('tasks').getFullList({
      sort: '-created',
    });
    tasks.value = records.map((record) => ({
      id: record.id,
      name: record.name || '',
      status: record.status || '',
      userID: record.userID || '',
      updatedAt: record.updatedAt || null,
    }));
    console.log(tasks.value);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

onMounted(() => {
  getAllTasks()
})
</script>
