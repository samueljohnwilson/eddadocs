import type { RouteRecordRaw } from "vue-router";
import { Routes } from '@/constants/routes';
import { Gods } from '@/constants/gods';
import data from '@/data/gods/data';
import type { ValueOf } from '@/utils/valueOf';

const routeFactory = (god: ValueOf<typeof Gods>) => {
  return {
    path: `/${Routes.GODS}/${god}`,
    props: { activeGod: data[god] },
    component: () => import('../views/GodsView.vue')
  };
};

export default Object.values(Gods).map((god) => routeFactory(god)) as RouteRecordRaw[];