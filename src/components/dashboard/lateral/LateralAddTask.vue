<template>
  <div class="
  flex justify-center fixed top-1/2 left-1/2 z-40 min-h-screen w-full transform -translate-x-1/2 
  -translate-y-1/2 bg-black/5">
    <div class="
    flex justify-center fixed top-1/2 left-1/2 z-40 min-h-screen w-full transform -translate-x-1/2 
    -translate-y-1/2 bg-black/5" @click="closeModal">

    </div>
    <div  
      tabindex="-1" 
      aria-hidden="true" 
      class="
        overflow-y-none overflow-x-hidden w-full
        justify-center items-center flex bg-black/50
      "
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full z-50">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div v-if="isSubmit" class="h-96 flex justify-center items-center">
            <Spinner/>
          </div>
          <div v-else>
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                Ajouter une nouvelle tâche
              </h3>
              <button 
                @click="closeModal"
                type="button" 
                class="
                  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center 
                  items-center dark:hover:bg-gray-600 dark:hover:text-white
                "
                data-modal-hide="default-modal"
              >
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5 space-y-4">
              <form class="p-4 md:p-5">
                <div class="grid gap-4 mb-4 grid-cols-2">
                  <div class="col-span-2">
                    <label 
                      for="name" 
                      class="
                        block mb-2 text-sm font-medium text-gray-900 
                        dark:text-white
                      "
                    >
                      Name
                    </label>
                    <input 
                      v-model="newTask.name"
                      type="text" 
                      name="name" 
                      id="name" 
                      class="
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                        rounded-lg focus:ring-primary-600 focus:border-primary-600 
                        block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                        dark:focus:border-primary-500
                      " 
                      placeholder="Le nom de la tâche" 
                      required
                    >
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <label 
                      for="category" 
                      class="
                        block mb-2 text-sm font-medium text-gray-900 dark:text-white
                      "
                    >
                      Category
                    </label>
                    <select 
                      id="category" 
                      class="
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                        rounded-lg focus:ring-primary-500 focus:border-primary-500 
                        block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                        dark:focus:border-primary-500
                      "
                    >
                      <option selected>Sélectionner la categorie</option>
                      <option value="fun">Fun</option>
                      <option value="important">Important</option>
                      <option value="divertissement">Divertissement</option>
                      <option value="devoir">Devoir</option>
                    </select>
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <label 
                      for="price" 
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ajouter un collaborateur
                    </label>
                    <input 
                      v-model="newTask.collaborator"
                      type="text" 
                      name="name" 
                      id="name" 
                      class="
                        bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                        rounded-lg focus:ring-primary-600 focus:border-primary-600 
                        block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                        dark:focus:border-primary-500
                      " 
                      placeholder="Le nom du collaborateur" 
                      required
                    >
                  </div>
                  <div class="col-span-2">
                    <VueDatePicker v-model="date" format="E"></VueDatePicker>
                  </div>
                  <div class="col-span-2">
                    <label 
                      for="description" 
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      La description
                    </label>
                    <textarea 
                      id="description" 
                      rows="4" 
                      class="
                        block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
                        rounded-lg border border-gray-300 focus:ring-blue-500 
                        focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500
                      " 
                      placeholder="Ajouter une description">
                    </textarea>
                  </div>
                  <div class="col-span-2 flex items-center justify-center">
                    <span class="text-red-500 text-lg">{{ errorMessage }}</span>
                  </div>
                </div>
            </form>
            </div>
            <div class="flex items-end justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button 
                @click="addNewTask()"
                type="submit" 
                class="text-gray-900 inline-flex items-center bg-green-200 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Ajouter une nouvelle tâche
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import {pb} from '@/pocketbase/pocket';
//import { fr } from 'date-fns/locale';
import '@vuepic/vue-datepicker/dist/main.css'
import { defineEmits } from "vue";
import { ref, watch } from 'vue'
import { useUserStore } from '@/stores/store';
import Spinner from '@/components/Spinner.vue'

const userStore = useUserStore();

console.log(userStore.userID);
pb.autoCancellation(false);

const isSubmit = ref(false)


const date = ref(new Date());
const emits = defineEmits();

const closeModal = () => {
  emits("close-modal");
};

const newTaskName = ref('');
const errorMessage = ref('');
const newTask = ref({
  name: '',
  status: 'draft',
  userID: userStore.userID, 
  updatedAt: null,
  category:'',
  collaborator:'',
  description:''
});

const validateForm = () => {
  if (
      !newTaskName.value.trim() || newTask.value.category === null || 
      !newTask.value.collaborator.trim() || !newTask.value.description.trim()
    ) {
      errorMessage.value = "Veuillez renseigner tous les champs";
    return false;
  }
  return true;
}

const addNewTask = async()=>{
  if(validateForm()){
    isSubmit.value = true;
    if (newTask.value.userID !== null) {
      try {
        isSubmit.value = true;
        newTask.value.name = newTaskName.value;
        const record = await pb.collection('tasks').create(newTask.value);
        console.log(record);
        //Réinitialisation du tableau
        newTaskName.value = '';

        isSubmit.value = false;
      } catch (error) {
        isSubmit.value = false;
        console.log("Une erreur s'est produite " + error);
      }
    } else {
      console.error("Impossible d'ajouter une tâche sans ID d'utilisateur.");
    }
  }
}
watch(() => userStore.userID, (newValue, oldValue) => {
  console.log('Nouvelle valeur de userID :', newValue);
  console.log('Ancienne valeur de userID :', oldValue);
  newTask.value.userID = newValue;
});

</script>