import { useUserStore } from '@/stores/store';

const userStore = useUserStore();

export interface FullUser {
  id: string;
  name: string;
  email: string;
  picture: string | null;
  pictureLoaded?: boolean;
}

export interface NewTask {
  name: string;
  status: 'draft';
  userID: string | null; 
  updatedAt: null;
  category: string;
  collaborator: string;
  description: string;
}

const initialNewTask: NewTask = {
  name: '',
  status: 'draft',
  userID: userStore.userID as string,
  updatedAt: null,
  category: '',
  collaborator: '',
  description: ''
};

export default initialNewTask;