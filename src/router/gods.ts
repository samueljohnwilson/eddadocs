import type { RouteRecordRaw } from 'vue-router';
import data from '@/data/gods/data';
import { Gods } from '@/enums/gods';
import { Routes } from '@/enums/routes';

const routeFactory = (god: Gods): RouteRecordRaw => ({
  path: `/${Routes.GODS}/${god}`,
  props: { activeGod: data[god] },
  name: god,
  component: () => import('../views/GodsView.vue')
});
const routes: RouteRecordRaw[] = Object.values(Gods).map((god) => routeFactory(god));

export default routes;
