import type { RouteRecordRaw } from "vue-router";
import surad from '@/data/gods/surad/data';
import ulat from '@/data/gods/ulat/data';
import { Routes } from '@/constants/routes';
import { Gods } from '@/constants/gods';

export default [
  {
    path: `/${Routes.GODS}/${Gods.SURAD}`,
    props: { activeGod: surad },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.ULAT}`,
    props: { activeGod: ulat },
    component: () => import('../views/GodsView.vue'),
  }
] as RouteRecordRaw[];