import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.ULAT,
  title: Gods.ULAT.toUpperCase(),
  quote: {
    text:
      'Die smiling! Ulat awaits!',
    attribution: 'Orc saying',
  },
  image: {
    url: 'gods/ulat-main.webp',
    title: 'An avatar of Ulat',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
