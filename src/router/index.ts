import { createRouter, createWebHistory } from 'vue-router'
import gods from './gods';
import races from './races';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/gods',
      name: 'gods',
      redirect: gods[0].path,
      children: gods
    },
    {
      path: '/races',
      name: 'races',
      redirect: races[0].path,
      children: races
    },
    {
      path: '/maps',
      name: 'maps',
      component: () => import('../views/GodsView.vue')
    }
  ]
});
