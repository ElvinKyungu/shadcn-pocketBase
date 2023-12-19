// routes/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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
