import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.PO,
  title: Gods.PO.toUpperCase(),
  quote: {
    text: 'The storm cares not for the plans of men.',
    attribution: 'Ancient sailor\'s proverb',
  },
  image: {
    url: 'gods/po-main.webp',
    title: 'An avatar of Po',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
