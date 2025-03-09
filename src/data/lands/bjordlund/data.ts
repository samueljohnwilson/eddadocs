import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.BJORDLUND,
  title: Lands.BJORDLUND.toUpperCase(),
  quote: {
    text: 'Die smiling',
    attribution: 'Bjord saying',
  },
  image: {
    url: 'lands/bjordlund-main.webp',
    title: 'A Bjord village',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
