import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.THAL,
  title: Gods.THAL.toUpperCase(),
  quote: {
    text:
      'Thal balances the weight of all worlds.',
    attribution: 'Ilmarin, Master of the Argenguard',
  },
  image: {
    url: 'gods/thal-main.webp',
    title: 'An avatar of Thal',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
