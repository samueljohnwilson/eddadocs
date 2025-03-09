import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.RAJAPUN,
  title: Lands.RAJAPUN.toUpperCase(),
  quote: {
    text: 'The island is still poisoned by the plague of Akura. But for the dwarves, it is a paradise.',
    attribution: 'Yamwha Bija, Ithran scholar',
  },
  image: {
    url: 'lands/rajapun-main.webp',
    title: 'A beach on Daya Rajapun',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
