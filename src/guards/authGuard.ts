// authGuard.ts
import { useUserStore } from '@/stores/store';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export function isAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
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