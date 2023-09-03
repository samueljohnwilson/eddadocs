import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { Routes } from '@/enums/routes';
import gods from './gods';
import lands from './lands';
import races from './races';

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
