import {NewTask} from '@/types/addTask.ts'
import { createUSer, userLogin } from '@/types/user'


export const validateFormTask = (task: NewTask) => {
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
export const validateFormLogin = (userInfo: userLogin) =>{
  if (
    !userInfo.email.trim()  || 
    !userInfo.password.trim()
  ) {
    return false;
  }
  return true;
}