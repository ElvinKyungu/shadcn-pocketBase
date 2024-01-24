import {NewTask} from '@/types/addTask.ts'


export const validateForm = (task: NewTask) => {
  console.log(task);
  if (
    !task.name.trim() || 
    task.category === ""  || 
    !task.description.trim()
  ) {
    return false;
  }
  return true;
}