<template>
  <div class="px-6 py-8">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-3xl p-8 mb-5">
        <LateralHeader/>
        <div class="grid grid-cols-2 gap-x-20">
          <div>
            <h2 class="text-2xl font-bold mb-4">Stats</h2>

            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2">
                <div class="p-4 bg-green-100 rounded-xl">
                  <div class="font-bold text-xl text-gray-800 leading-none">Hello, <br>Elvin</div>
                  <div class="mt-5">
                    <button type="button" class="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                      Start working
                    </button>
                  </div>
                </div>
              </div>
              <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                <div class="font-bold text-2xl leading-none">20</div>
                <div class="mt-2">Tasks finished</div>
              </div>
              <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                <div class="font-bold text-2xl leading-none">4</div>
                <div class="mt-2">Remaining tasks</div>
              </div>
              <div class="col-span-2">
                <div class="p-4 bg-purple-100 rounded-xl text-gray-800">
                  <div class="font-bold text-xl leading-none">Your daily plan</div>
                  <div class="mt-2">20 of 24 completed</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Your tasks today</h2>

            <div class="space-y-4">
              <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div class="flex justify-between">
                  <div class="text-gray-400 text-xs">Number 10</div>
                  <div class="text-gray-400 text-xs">4h</div>
                </div>
                <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                <div class="text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>Deadline is today
                </div>
              </div>
              <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div class="flex justify-between">
                  <div class="text-gray-400 text-xs">Grace Aroma</div>
                  <div class="text-gray-400 text-xs">7d</div>
                </div>
                <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                <div class="text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>New feedback
                </div>
              </div>
              <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div class="flex justify-between">
                  <div class="text-gray-400 text-xs">Petz App</div>
                  <div class="text-gray-400 text-xs">2h</div>
                </div>
                <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
              </div>

            </div>
          </div>
        </div>
        <div class="overflow-x-auto min-h-[20vh]">
          <Spinner v-if="isLoading" class="flex justify-center items-center h-[20vh]"/>
          <table 
            v-if="areDataReady"
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th 
                  scope="col" 
                  class="px-4 py-3 transition-opacity duration-500"
                  v-if="!isLoading"
                >
                  Nom de la tâche
                </th>
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
                <Transition>
                  <th 
                    v-if="!isLoading"
                    scope="row" 
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white transition-opacity duration-500"
                  >
                    {{ task.name }}
                    {{ task.id }}
                  </th>
                </Transition>
                <td class="px-4 py-3 flex flex-col items-center justify-end">
                  <button 
                    @click="toggleModal(task.id)" 
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
                    v-if="showModal[task.id]" 
                    id="apple-watch-se-dropdown" 
                    class="
                      z-10 w-44 h-auto bg-white rounded divide-y divide-gray-100 border shadow-lg
                      dark:bg-gray-700 dark:divide-gray-600 absolute top-[9.8rem] 
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
                      <li>
                        <button 
                          class="
                            bg-transparent w-full hover:border-transparent text-left
                            block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 
                          "
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';
import LateralHeader from '@/components/dashboard/lateral/LateralHeader.vue';
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
const isLoading = ref<boolean>(!props.tasks || props.tasks.length === 0);
  const showModal: Record<string, boolean> = {};


watch(() => props.tasks, () => {
  isLoading.value = !props.tasks || props.tasks.length === 0;
}, { immediate: true });

const toggleModal = (taskId: string) => {
  showModal[taskId] = !showModal[taskId];
  console.log(showModal[taskId]);
};

const areDataReady = computed(() => !isLoading.value);
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>