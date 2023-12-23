// authGuard.ts
import { useUserStore } from '@/stores/store';
import { createPinia } from 'pinia';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const userStore = useUserStore();

export function isAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const pinia = createPinia();
  const userStore = useUserStore(pinia);.
  userStore.restoreUserData();
  if (userStore.token) {
    next();
  }else {
    next('/');
  }
}
