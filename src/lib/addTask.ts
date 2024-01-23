import { FullUsers } from '@/types/addTask.ts';
import { pb } from '@/pocketbase/pocket';

const getAllUsers = async (): Promise<FullUsers[]> => {
  try {
    const userRecords = await pb.collection('users').getFullList({
      sort: '-created',
    });

    const users: FullUsers[] = userRecords.map((userRecord) => ({
      id: userRecord.id,
      name: userRecord.name || '',
      email: userRecord.email || '',
      picture: userRecord.picture || null,
    }));
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  getAllUsers
}