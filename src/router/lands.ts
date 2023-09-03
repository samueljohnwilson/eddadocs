import type { RouteRecordRaw } from "vue-router";
import { Routes } from '@/constants/routes';
import { Lands } from '@/constants/lands';
import data from '@/data/lands/data';
import type { ValueOf } from '@/utils/valueOf';

const routeFactory = (land: ValueOf<typeof Lands>) => {
  return {
    path: `/${Routes.LANDS}/${land}`,
    props: { activeLand: data[land] },
    component: () => import('../views/LandsView.vue')
  };
};

export default Object.values(Lands).map((land) => routeFactory(land)) as RouteRecordRaw[];