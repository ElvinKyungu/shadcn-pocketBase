import { FullUser, initialNewTask } from '@/types/addTask.ts';
import { pb } from '@/pocketbase/pocket';
import { validateForm } from '@/tests/unit/FormValidation.spec';
import { ref, computed } from 'vue'

const isSubmit = ref(false);
const users = ref<FullUser[]>([]);
const selectedUsers = ref<FullUser[]>([]);
const showSuggestions = ref(false);

const getAllUsers = async (): Promise<FullUser[]> => {
  try {
    const userRecords = await pb.collection('users').getFullList({
      sort: '-created',
    });

    const users: FullUser[] = userRecords.map((userRecord) => ({
      id: userRecord.id,
      name: userRecord.name || '',
      email: userRecord.email || '',
      picture: userRecord.avatar || null,
    }));
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addNewTask = async () => {
  if (validateForm(initialNewTask)) {
    isSubmit.value = true;

    if (initialNewTask.userID !== null) {
      try {
        isSubmit.value = true;

        // Creating a new task using the initialNewTask object
        const record = await pb.collection('tasks').create(initialNewTask);
        console.log(record);

        // Réinitialisation du tableau
        initialNewTask.name = '';
        isSubmit.value = false;
      } catch (error) {
        isSubmit.value = false;
        console.error("Une erreur s'est produite " + error);
      }
    } else {
      console.error("Impossible d'ajouter une tâche sans ID d'utilisateur.");
    }
  }
};

// Filter users based on the search input
const filteredUsers = computed(() => {
  const searchTerm = initialNewTask.collaborator.toLowerCase().trim();
  console.log(searchTerm)

  if (!searchTerm) return [];
  return users.value.filter(user =>
    user.name.toLowerCase().includes(searchTerm)
  );
});

const handleInputChange = () => {
  showSuggestions.value = true;
};

const selectUser = async (user: FullUser) => {
  user.picture = await loadUserPicture(user.id);

  selectedUsers.value.push(user);
  showSuggestions.value = false;
};

const loadUserPicture = async (userId: string): Promise<string> => {
  return new Promise(resolve => {
    const user = users.value.find(u => u.id === userId);
    resolve(user?.picture || 'profile_default.jpg');
  });
};

const clearSelectedUsers = () => {
  selectedUsers.value = [];
};

export {
  getAllUsers,
  addNewTask,
  showSuggestions,
  filteredUsers,
  handleInputChange,
  selectUser,
  clearSelectedUsers
};
