import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { Routes } from '@/enums/routes';
import foes from './foes';
import gods from './gods';
import lands from './lands';
import maps from './maps';
import races from './races';

const homeRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('../views/HomeView.vue'),
};
const historyRoute: RouteRecordRaw = {
  path: '/history',
  component: () => import('../views/HistoryView.vue'),
};
const routeData: Record<Routes, RouteRecordRaw[]> = {
  [Routes.GODS]: gods,
  [Routes.RACES]: races,
  [Routes.LANDS]: lands,
  [Routes.MAPS]: maps,
  [Routes.FOES]: foes,
  [Routes.HISTORY]: [historyRoute],
};
const routeFactory = (route: Routes, redirect: RouteRecordRaw[]): RouteRecordRaw => ({
  path: `/${route}`,
  name: route,
  redirect: redirect?.length ? redirect[0].path : undefined,
  children: redirect,
});
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.entries(routeData).map(([route, redirect]) => routeFactory(route as Routes, redirect)).concat([homeRoute, historyRoute]),
});

export default router;
