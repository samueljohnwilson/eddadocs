import type { RouteRecordRaw } from 'vue-router';
import data from '@/data/lands/data';
import { Lands } from '@/enums/lands';
import { Routes } from '@/enums/routes';

const routeFactory = (land: Lands) => ({
  path: `/${Routes.LANDS}/${land}`,
  props: { activeLand: data[land] },
  component: () => import('../views/LandsView.vue')
});

export default Object.values(Lands).map((land) => routeFactory(land)) as RouteRecordRaw[];
