import type { RouteRecordRaw } from 'vue-router';
import data from '@/data/maps/data';
import { Maps } from '@/enums/maps';
import { Routes } from '@/enums/routes';

const routeFactory = (map: Maps) => ({
  path: `/${Routes.MAPS}/${map}`,
  props: { activeMap: data[map] },
  component: () => import('../views/MapsView.vue')
});
const routes: RouteRecordRaw[] = Object.values(Maps).map((map) => routeFactory(map));

export default routes;
