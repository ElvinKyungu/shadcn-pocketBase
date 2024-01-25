import {NewTask} from '@/types/addTask.ts'
import { createUSer } from '@/types/user'


export const validateForm = (task: NewTask) => {
  if (
    !task.name.trim() || 
    task.category === ""  || 
    !task.description.trim()
  ) {
    return false;
  }
  return true;
}

export const validateFormSignUp = (userInfo: createUSer) =>{
  if (
    !userInfo.name.trim() || 
    !userInfo.email.trim()  || 
    !userInfo.username.trim()||
    !userInfo.password.trim()
  ) {
    return false;
  }
  return true;
}
