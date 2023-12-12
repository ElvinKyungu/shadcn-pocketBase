// store.ts
import { defineStore } from 'pinia';

interface UserState {
  name: string | null;
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: null,
    token: null,
  }),
  actions: {
    setUserData({ name, token }: { name: string; token: string }): void {
      this.name = name;
      this.token = token;
      localStorage.setItem('user', JSON.stringify({ name, token }));
    },
    clearUserData(): void {
      this.name = null;
      this.token = null;
      localStorage.removeItem('user');
    },
    restoreUserData(): void {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const { name, token } = JSON.parse(storedUser);
        this.name = name;
        this.token = token;
      }
    },
  },
});
