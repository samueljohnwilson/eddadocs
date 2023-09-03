import { createRouter, createWebHistory } from 'vue-router'
import gods from './gods';
import races from './races';
import lands from './lands';
import { Routes } from '@/constants/routes';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/${Routes.RACES}`,
      name: Routes.RACES,
      redirect: races[0].path,
      children: races
    },
    {
      path: `/${Routes.LANDS}`,
      name: Routes.LANDS,
      redirect: lands[0].path,
      children: lands
    },
    {
      path: `/${Routes.GODS}`,
      name: Routes.GODS,
      redirect: gods[0].path,
      children: gods
    },
    {
      path: `/${Routes.MAPS}`,
      name: Routes.MAPS,
      component: () => import('../views/GodsView.vue')
    }
  ]
});
