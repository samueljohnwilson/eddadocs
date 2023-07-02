import type { RouteRecordRaw } from "vue-router";
import agorus from '@/data/gods/agorus/data';
import surad from '@/data/gods/surad/data';
import po from '@/data/gods/po/data';
import thal from '@/data/gods/thal/data';
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
    path: `/${Routes.GODS}/${Gods.AGORUS}`,
    props: { activeGod: agorus },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.THAL}`,
    props: { activeGod: thal },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.PO}`,
    props: { activeGod: po },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.ULAT}`,
    props: { activeGod: ulat },
    component: () => import('../views/GodsView.vue'),
  }
] as RouteRecordRaw[];