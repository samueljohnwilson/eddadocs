
import { Gods } from '@/constants/gods';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import type { BaseArticleData } from '@/types';
import { shallowRef } from 'vue';

export default {
  id: Gods.CERRUNOS,
  title: Gods.CERRUNOS.toUpperCase(),
  quote: {
    text:
      'As spring follows winter, so justice follows evil. We must put our faith in the the First King, and act as the agents of his judgement.',
    attribution: 'Sir Lunder, magistrate of the Even Hand',
  },
  image: {
    url: 'gods/cerrunos-main.png',
    title: 'An avatar of Cerrunos',
  },
  content: shallowRef(MainComponent),
  sidebar: shallowRef(SidebarComponent),
} as BaseArticleData;
