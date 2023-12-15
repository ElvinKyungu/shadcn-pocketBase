// store.ts
import { defineStore } from 'pinia';

interface UserState {
  id: string | null;
  name: string | null;
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    id: null,
    name: null,
    token: null,
  }),
  actions: {
    setUserData({ userID, name, token }: { userID: string, name: string; token: string }): void {
      this.id = userID;
      this.name = name;
      this.token = token;
      localStorage.setItem('user', JSON.stringify({ userID, name, token }));
    },
    clearUserData(): void {
      this.id = null;
      this.name = null;
      this.token = null;
      localStorage.removeItem('user');
    },
    restoreUserData(): void {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const { userID, name, token } = JSON.parse(storedUser);
        this.id = userID;
        this.name = name;
        this.token = token;
      }
    },
  },
});
