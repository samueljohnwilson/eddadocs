import { Gods } from '@/constants/gods';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';

export default {
  id: Gods.AGORUS,
  title: Gods.AGORUS.toUpperCase(),
  className: 'my-class',
  quote: {
    text:
      'As spring follows winter, so justice follows evil. We must put our faith in the the First King, and act as the agents of his judgement.',
    attribution: 'Sir Lunder, magistrate of the Even Hand',
  },
  image: {
    url: 'gods/agorus-main.webp',
    title: 'An avatar of Agorus',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
} as BaseArticleData;
