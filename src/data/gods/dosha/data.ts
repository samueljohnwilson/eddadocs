import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.DOSHA,
  title: Gods.DOSHA.toUpperCase(),
  quote: {
    text: 'Order everlasting',
    attribution: 'Inscription on the Gates of Ursh, translated from the Black Tongue',
  },
  image: {
    url: 'gods/dosha-main.webp',
    title: 'An avatar of Dosha',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
