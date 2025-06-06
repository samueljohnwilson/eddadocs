import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.AWATUK,
  title: Lands.AWATUK.toUpperCase(),
  quote: {
    text: 'We do not know your kings. We know only the land and sea.',
    attribution: 'Uiwak, Awatuk chieftain',
  },
  image: {
    url: 'lands/awatuk-main.webp',
    title: 'Sunrise on the Awatukan coast',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
