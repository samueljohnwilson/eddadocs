import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.JUTLUND,
  title: Lands.JUTLUND.toUpperCase(),
  quote: {
    text: 'The Jut claim to be the first people of the world. Perhaps they are. They seem as beasts to me.',
    attribution: 'Brother Olaf, missionary of the Even Hand',
  },
  image: {
    url: 'lands/jutlund-main.webp',
    title: 'The Jut Woods',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
