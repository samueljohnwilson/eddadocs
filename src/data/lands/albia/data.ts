import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.ALBIA,
  title: Lands.ALBIA.toUpperCase(),
  quote: {
    text: 'We await the call',
    attribution: 'Motto of the Albian realm, translated',
  },
  image: {
    url: 'lands/albia-main.webp',
    title: 'The Great Chambers in Eyre',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
