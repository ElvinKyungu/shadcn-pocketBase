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
  updatedAt: string;
  category: string;
  deadline: string;
  description: string;
}