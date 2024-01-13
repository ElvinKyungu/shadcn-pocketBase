<template>
  <body class="flex items-center justify-center py-8 px-2">
    <div class="w-full sm:px-6">
      <div
        class="
          px-4
          md:px-10
          py-4
          md:py-7
          bg-gray-100
          rounded-tl-lg rounded-tr-lg
        "
      >
        <div class="sm:flex items-center justify-between">
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-bold
              leading-normal
              text-gray-800
            "
          >
            Il y a {{ tasks.length }} tâche en général
          </p>
          <div>
            <button
              class="
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
                inline-flex
                sm:ml-3
                mt-4
                sm:mt-0
                items-start
                justify-start
                px-6
                py-3
                bg-green-200
                hover:bg-green-300
                focus:outline-none
                rounded
              "
            >
              <p class="text-sm font-medium leading-none text-black">
                Filtrer
              </p>
            </button>
          </div>
        </div>
      </div>
      <div
        class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto"
      >
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-16
                w-full
                text-sm
                leading-none
                text-gray-800
              "
            >
              <th class="font-normal text-left pl-4">Nom de la tâche</th>
              <th class="font-normal text-left pl-20">Deadline</th>
              <th class="font-normal text-left pl-16">Membres</th>
              <th class="font-normal text-left pl-7">Actions</th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr
              v-for="task in tasks"
              :key="task.id"
              tabindex="0"
              class="
                focus:outline-none
                h-20
                text-sm
                leading-none
                text-gray-800
                bg-white
                hover:bg-gray-100
                border-b border-t border-gray-100
              "
            >
              <td class="pl-4 cursor-pointer">
                <div class="flex items-center">
                  <div class="w-10 h-10">
                    <img
                      class="w-full h-full"
                      src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                      alt="UX Design and Visual Strategy"
                    />
                  </div>
                  <div class="pl-4">
                    <p class="font-medium">{{ task.name }}</p>
                    <p class="text-xs leading-3 text-gray-600 pt-2">
                      {{ task.category.trim().toLocaleUpperCase() }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="pl-20">
                <p 
                  v-html="formatDeadline(task.deadline).date" 
                  class="font-medium"
                >
                </p>
                <p
                  v-html="formatDeadline(task.deadline).daysRemaining" 
                  class="text-xs leading-3 text-gray-600 pt-2"
                >
              </p>
              </td>
              <td class="pl-16">
                <div class="flex items-center">
                  <img
                    class="shadow-md w-8 h-8 rounded-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                    alt="collaborator 1"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                    alt="collaborator 2"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                    alt="collaborator 3"
                  />
                  <img
                    class="shadow-md w-8 h-8 rounded-full -ml-2"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                    alt="collaborator 4"
                  />
                </div>
              </td>
              <td class="px-7 2xl:px-0">
                <button
                  @click="showActionsModal = !showActionsModal"
                  class="focus:ring-2 rounded-xl bg-black text-white p-3 focus:outline-none ml-7"
                  role="button"
                  aria-label="options"
                >
                  action
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>
<script setup lang="ts">
import { pb } from '@/pocketbase/pocket';
import { ref, onMounted } from 'vue';
import { format, differenceInDays } from 'date-fns';

export interface Task {
  id: string; 
  name: string;
  status: string; 
  userID: string;
  updatedAt: string | null; 
  category: string; 
  deadline: string | null; 
}

const tasks = ref<Task[]>([]);
const showActionsModal = ref(false)

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
      category: record.category ,
      deadline: record.deadline || null,
    }));
    console.log(tasks.value);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

const formatDeadline = (deadline: string | null): { date: string; daysRemaining: string } => {
  if (!deadline) return { date: '', daysRemaining: '' };

  const deadlineDate = new Date(deadline);
  const currentDate = new Date();

  const daysRemaining = differenceInDays(deadlineDate, currentDate);

  const formattedDeadline = format(deadlineDate, 'dd/MM/yyyy');

  const daysText = daysRemaining === 1 ? 'jour restant' : 'jours restants';
  const daysRemainingText = daysRemaining > 0
    ? `${daysRemaining} ${daysText}`
    : 'Date dépassée';
  return {
    date: formattedDeadline,
    daysRemaining: daysRemainingText,
  };
};

onMounted(() => {
  getAllTasks()
})
</script>

<style>
</style>
