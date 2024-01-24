import { useUserStore } from '@/stores/store';

const userStore = useUserStore();

export interface FullUser {
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface NewTask {
  name: string;
  status: 'draft';
  userID: string | null; 
  updatedAt: Date;
  category: string;
  deadline: Date;
  collaborator: string;
  description: string;
}

export const initialNewTask: NewTask = {
  name: '',
  status: 'draft',
  userID: userStore.userID as string,
  updatedAt: new Date(),
  category: '',
  deadline: new Date(),
  collaborator: '',
  description: ''
};
