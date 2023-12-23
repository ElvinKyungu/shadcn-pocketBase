// routes/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { isAuthenticated } from '@/guards/authGuard.ts';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'), 
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user.vue'), 
    beforeEnter: isAuthenticated,
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: () => import('@/views/signUp.vue'), 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
