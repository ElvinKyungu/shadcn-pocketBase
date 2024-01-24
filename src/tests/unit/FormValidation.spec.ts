import {ref} from 'vue'


const errorMessage = ref()

export const validateForm = (task, newTaskName) => {
  if (
    !newTaskName.trim() || task.category === null ||
    !task.collaborator.trim() || !task.description.trim()
  ) {
    errorMessage.value = "Veuillez renseigner tous les champs";
    return false;
  }
  return true;
}