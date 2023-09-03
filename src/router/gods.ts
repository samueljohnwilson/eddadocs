import type { RouteRecordRaw } from "vue-router";
import { Routes } from '@/enums/routes';
import data from '@/data/gods/data';
import { Gods } from "@/enums/gods";

const routeFactory = (god: Gods) => ({
  path: `/${Routes.GODS}/${god}`,
  props: { activeGod: data[god] },
  component: () => import('../views/GodsView.vue')
});

export default Object.values(Gods).map((god) => routeFactory(god)) as RouteRecordRaw[];
