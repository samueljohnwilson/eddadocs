import type { RouteRecordRaw } from "vue-router";
import { Routes } from '@/constants/routes';
import { Races } from "@/constants/races";
import dwarf from '@/data/races/dwarf/data';
import human from '@/data/races/human/data';

export default [
  {
    path: `/${Routes.RACES}/${Races.DWARF}`,
    props: { activeRace: dwarf },
    component: () => import('../views/RacesView.vue'),
  },
  {
    path: `/${Routes.RACES}/${Races.HUMAN}`,
    props: { activeRace: human },
    component: () => import('../views/RacesView.vue'),
  }
] as RouteRecordRaw[];