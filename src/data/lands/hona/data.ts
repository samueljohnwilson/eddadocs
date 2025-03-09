import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.HONA,
  title: Lands.HONA.toUpperCase(),
  quote: {
    text: 'Hona has the longest memory of the nations.',
    attribution: 'Kan Bak, Honan historian',
  },
  image: {
    url: 'lands/hona-main.webp',
    title: 'A village in the foothills of the Aka Mountains',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
