import { Lands } from '@/constants/lands';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';

export default {
  id: Lands.ALBIA,
  title: Lands.ALBIA.toUpperCase(),
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