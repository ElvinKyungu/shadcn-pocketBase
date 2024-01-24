import { pb } from '@/pocketbase/pocket';
import { NewTask } from '@/types/addTask.ts';

const addNewTaskTEST = async (newTask: NewTask) => {
  const data = {
    "name": newTask.name,
    "status": newTask.status,
    "updatedAt": newTask.updatedAt,
    "userID": "4w3769t9z89ff0p",
    "category": newTask.category,
    "deadline": newTask.deadline,
    "description": newTask.description
  };
  console.log(data);
  try {
    const record = await pb.collection('tasks').create(data);
    console.log(record);
  } catch (error) {
    console.error("Une erreur s'est produite " + error);
  }
}

export {
    addNewTaskTEST,
};
