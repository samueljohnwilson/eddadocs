import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.ANORETH,
  title: Gods.ANORETH.toUpperCase(),
  quote: {
    text: 'From the void, she wove the tapestry of existence.',
    attribution: 'The First Scrolls',
  },
  image: {
    url: 'gods/anoreth-main.webp',
    title: 'The Astral Plane',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
