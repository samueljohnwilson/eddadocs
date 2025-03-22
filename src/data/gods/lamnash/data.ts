import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.LAMNASH,
  title: Gods.LAMNASH.toUpperCase(),
  quote: {
    text: 'The ink on a contract keeps blood from the blade.',
    attribution: 'Semaian saying',
  },
  image: {
    url: 'gods/lamnash-main.webp',
    title: 'An avatar of Lamnash',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
