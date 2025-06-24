import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.OTHAR,
  title: Gods.OTHAR.toUpperCase(),
  quote: {
    text: 'Othar\'s blade knows no mercy, only victory.',
    attribution: 'Battle cry of the Red Legion',
  },
  image: {
    url: 'gods/othar-main.webp',
    title: 'An avatar of Othar',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
