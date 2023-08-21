import type { RouteRecordRaw } from "vue-router";
import { Routes } from '@/constants/routes';
import { Races } from "@/constants/races";
import dwarf from '@/data/races/dwarf/data';
import elf from '@/data/races/elf/data';
import halfElf from '@/data/races/half-elf/data';
import halfOrc from '@/data/races/half-orc/data';
import halfling from '@/data/races/halfling/data';
import human from '@/data/races/human/data';
import firbolg from '@/data/races/firbolg/data';

export default [
  {
    path: `/${Routes.RACES}/${Races.DWARF}`,
    props: { activeRace: dwarf },
    component: () => import('../views/RacesView.vue'),
  },
  {
    path: `/${Routes.RACES}/${Races.ELF}`,
    props: { activeRace: elf },
    component: () => import('../views/RacesView.vue'),
  },
  {
    path: `/${Routes.RACES}/${Races.HUMAN}`,
    props: { activeRace: human },
    component: () => import('../views/RacesView.vue'),
  },
  {
    path: `/${Routes.RACES}/${Races.HALF_ELF}`,
    props: { activeRace: halfElf },
    component: () => import('../views/RacesView.vue'),
  },
  {
    path: `/${Routes.RACES}/${Races.HALF_ORC}`,
    props: { activeRace: halfOrc },
    component: () => import('../views/RacesView.vue'),
  },
  {
    path: `/${Routes.RACES}/${Races.HALFLING}`,
    props: { activeRace: halfling },
    component: () => import('../views/RacesView.vue'),
  },
  {
    path: `/${Routes.RACES}/${Races.FIRBOLG}`,
    props: { activeRace: firbolg },
    component: () => import('../views/RacesView.vue'),
  }
] as RouteRecordRaw[];