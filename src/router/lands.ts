import type { RouteRecordRaw } from "vue-router";
import { Routes } from '@/enums/routes';
import { Lands } from '@/enums/lands';
import data from '@/data/lands/data';

const routeFactory = (land: Lands) => ({
  path: `/${Routes.LANDS}/${land}`,
  props: { activeLand: data[land] },
  component: () => import('../views/LandsView.vue')
});

export default Object.values(Lands).map((land) => routeFactory(land)) as RouteRecordRaw[];
