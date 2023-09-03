import { Gods } from '@/enums/gods';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';

export default {
  id: Gods.MALAK,
  title: Gods.MALAK.toUpperCase(),
  quote: {
    text:
      'As spring follows winter, so justice follows evil. We must put our faith in the the First King, and act as the agents of his judgement.',
    attribution: 'Sir Lunder, magistrate of the Even Hand',
  },
  image: {
    url: 'gods/malak-main.webp',
    title: 'Malak',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
} as BaseArticleData;
