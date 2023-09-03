import type { RouteRecordRaw } from 'vue-router';
import data from '@/data/races/data';
import { Races } from '@/enums/races';
import { Routes } from '@/enums/routes';

const routeFactory = (race: Races) => ({
  path: `/${Routes.RACES}/${race}`,
  props: { activeRace: data[race] },
  component: () => import('../views/RacesView.vue')
});

export default Object.values(Races).map((race) => routeFactory(race)) as RouteRecordRaw[];
