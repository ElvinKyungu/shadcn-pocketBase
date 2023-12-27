<template>
  <div class="overflow-x-auto min-h-[20vh]">
    <Spinner v-if="isLoading" />
    <table 
      v-if="areDataReady"
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-4 py-3">Nom de la tâche</th>
          <th scope="col" class="px-4 py-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-if="Array.isArray(props.tasks) && props.tasks.length > 0"
          v-for="task in props.tasks" 
          :key="task.id"
          class="border-b dark:border-gray-700">
          <th 
            scope="row" 
            class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ task.name }}
          </th>
          <td class="px-4 py-3 flex flex-col items-center justify-end">
            <button 
              @click="showModal = !showModal" 
              class="
                inline-flex items-center p-0.5 text-sm font-medium 
                text-center text-gray-500 hover:text-gray-800 
                rounded-lg focus:outline-none dark:text-gray-400 
                dark:hover:text-gray-100 relative
              " 
              type="button"
            >
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            <div 
              v-show="showModal" 
              id="apple-watch-se-dropdown" 
              class="
                z-10 w-44 bg-white rounded divide-y divide-gray-100 border shadow-lg
                dark:bg-gray-700 dark:divide-gray-600 absolute top-[9.8rem] h-auto 
              "
            >
              <ul 
                class="py-1 text-sm text-gray-700 dark:text-gray-200" 
                aria-labelledby="apple-watch-se-dropdown-button"
              >
                <li>
                  <button 
                    class="
                      bg-transparent w-full hover:border-transparent text-left
                      block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600
                    "
                  >
                    Show
                  </button>
                </li>
                <li>
                  <button 
                    class="
                      bg-transparent w-full hover:border-transparent text-left
                      block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 
                    "
                  >
                    Edit
                  </button>
                </li>
              </ul>
              <div class="py-1">
                <button 
                  class="
                    bg-transparent w-full hover:border-transparent text-left
                    block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import { Ref, ref, defineProps, watch, computed } from 'vue';
export interface Task {
  id: string;
  name: string;
  status: string;
  userID: string;
  updatedAt: string | null;
}

interface TableProps {
  tasks: Ref<Task[]>;
}
const props = defineProps<TableProps>();
const isLoading = ref(true);
const showModal = ref(false);

const checkDataReady = () => {
  isLoading.value = false;
};

watch(() => props.tasks, () => {
  checkDataReady();
}, { immediate: true });

const areDataReady = computed(() => !isLoading.value);

</script>