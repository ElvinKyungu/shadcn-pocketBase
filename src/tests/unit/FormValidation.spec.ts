import {ref} from 'vue'
import {NewTask} from '@/types/addTask.ts'


const errorMessage = ref()

export const validateForm = (task: NewTask, newTaskName: string) => {
  if (
    !newTaskName.trim() || task.category === null ||
    !task.collaborator.trim() || !task.description.trim()
  ) {
    errorMessage.value = "Veuillez renseigner tous les champs";
    return false;
  }
  return true;
}