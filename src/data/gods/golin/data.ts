import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.GOLIN,
  title: Gods.GOLIN.toUpperCase(),
  quote: {
    text: 'Be not tamed.',
    attribution: 'Oath to Golin',
  },
  image: {
    url: 'gods/golin-main.webp',
    title: 'An avatar of Golin',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
