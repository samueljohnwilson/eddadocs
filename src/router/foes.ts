import type { RouteRecordRaw } from 'vue-router';
import data from '@/data/foes/data';
import { Foes } from '@/enums/foes';
import { Routes } from '@/enums/routes';

const routeFactory = (foe: Foes): RouteRecordRaw => ({
  path: `/${Routes.FOES}/${foe}`,
  props: { activeFoe: data[foe] },
  name: foe,
  component: () => import('../views/FoesView.vue')
});
const routes: RouteRecordRaw[] = Object.values(Foes).map((foe) => routeFactory(foe));

export default routes;
