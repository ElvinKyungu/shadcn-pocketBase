import {NewTask} from '@/types/addTask.ts'
import { User } from '@/types/user'


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

export const validateFormSignUp = (userInfo: User) =>{

}