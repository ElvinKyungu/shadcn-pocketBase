// authGuard.ts
import { useUserStore } from '@/stores/store';
import { NavigationGuardNext } from 'vue-router';


export function isAuthenticated(
  next: NavigationGuardNext
): void {

  const userStore = useUserStore();
  userStore.restoreUserData();
  if (userStore.token) {
    next();
  }else {
    next('/');
  }
}
