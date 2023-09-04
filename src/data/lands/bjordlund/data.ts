import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

export default {
  id: Lands.BJORDLUND,
  title: Lands.BJORDLUND.toUpperCase(),
  quote: {
    text:
      'As spring follows winter, so justice follows evil. We must put our faith in the the First King, and act as the agents of his judgement.',
    attribution: 'Sir Lunder, magistrate of the Even Hand',
  },
  image: {
    url: 'lands/albia-main.webp',
    title: 'An avatar of Agorus',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
} as BaseArticleData;
