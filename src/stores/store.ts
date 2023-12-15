// store.ts
import { defineStore } from 'pinia';

interface UserState {
  userID: string | null;
  name: string | null;
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userID: null,
    name: null,
    token: null,
  }),
  actions: {
    setUserData({ userID, name, token }: { userID: string, name: string; token: string }): void {
      this.userID = userID;
      this.name = name;
      this.token = token;
      localStorage.setItem('user', JSON.stringify({ userID, name, token }));
    },
    clearUserData(): void {
      this.userID = null;
      this.name = null;
      this.token = null;
      localStorage.removeItem('user');
    },
    restoreUserData(): void {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const { userID, name, token } = JSON.parse(storedUser);
        this.userID = userID;
        this.name = name;
        this.token = token;
      }
    },
  },
});
