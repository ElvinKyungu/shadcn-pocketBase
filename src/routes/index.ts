// routes/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('@/views/Home.vue'), 
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user.vue'), 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
