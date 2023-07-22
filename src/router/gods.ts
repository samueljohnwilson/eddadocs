import type { RouteRecordRaw } from "vue-router";
import agorus from '@/data/gods/agorus/data';
import enoreth from '@/data/gods/enoreth/data';
import surad from '@/data/gods/surad/data';
import po from '@/data/gods/po/data';
import thal from '@/data/gods/thal/data';
import ulat from '@/data/gods/ulat/data';
import ura from '@/data/gods/ura/data';
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
    path: `/${Routes.GODS}/${Gods.URA}`,
    props: { activeGod: ura },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.THAL}`,
    props: { activeGod: thal },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.ENORETH}`,
    props: { activeGod: enoreth },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.PO}`,
    props: { activeGod: po },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.ETH_KOREL}`,
    props: { activeGod: po },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.MALAK}`,
    props: { activeGod: po },
    component: () => import('../views/GodsView.vue'),
  },
  {
    path: `/${Routes.GODS}/${Gods.ULAT}`,
    props: { activeGod: ulat },
    component: () => import('../views/GodsView.vue'),
  }
] as RouteRecordRaw[];