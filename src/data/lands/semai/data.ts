import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.SEMAI,
  title: Lands.SEMAI.toUpperCase(),
  quote: {
    text:
      'Semai is ascendant. Their good fortune has them convinced that they rule Edda.',
    attribution: 'Eowich Yurd, Untish elderman',
  },
  image: {
    url: 'lands/semai-main.webp',
    title: 'A Semaian city in the Japari Desert',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
