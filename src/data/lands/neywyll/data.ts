import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.NEYWYLL,
  title: Lands.NEYWYLL.toUpperCase(),
  quote: {
    text: 'The woods of Neywyll are deep beyond reckoning. The Neydan think that the gods cannot see them there.',
    attribution: 'Galanduil, Albian elder',
  },
  image: {
    url: 'lands/neywyll-main.webp',
    title: 'A valley in Neywyll',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
