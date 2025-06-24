import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.URA,
  title: Gods.URA.toUpperCase(),
  quote: {
    text: 'In beauty, we find the spark of creation.',
    attribution: 'Ura\'s First Teaching',
  },
  image: {
    url: 'gods/ura-main.webp',
    title: 'An avatar of Ura',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
