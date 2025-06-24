import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.VALEYA,
  title: Gods.VALEYA.toUpperCase(),
  quote: {
    text: 'In the darkest night, Valeya\'s light guides the lost home.',
    attribution: 'Common prayer to Valeya',
  },
  image: {
    url: 'gods/valeya-main.webp',
    title: 'An avatar of Valeya',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
