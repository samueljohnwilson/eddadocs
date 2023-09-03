import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import gods from './gods';
import races from './races';
import lands from './lands';
import { Routes } from '@/enums/routes';

const routes: Record<Routes, RouteRecordRaw[] | null> = {
  [Routes.GODS]: gods,
  [Routes.RACES]: races,
  [Routes.LANDS]: lands,
  [Routes.MAPS]: null,
};
const routeFactory = (route: Routes, redirect: RouteRecordRaw[] | null) => ({
  path: `/${route}`,
  name: route,
  redirect: redirect && redirect.length ? redirect[0].path : null,
  children: redirect,
});

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.entries(routes).map(([route, redirect]) => routeFactory(route as Routes, redirect)) as RouteRecordRaw[],
});
