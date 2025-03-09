import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.HETHESKEIN,
  title: Lands.HETHESKEIN.toUpperCase(),
  quote: {
    text: 'The far north belongs to the dwarves. No others are hard enough to hold it.',
    attribution: 'Igrad III, King of Bjordlund',
  },
  image: {
    url: 'lands/hetheskein-main.webp',
    title: 'Mount Hethe',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
