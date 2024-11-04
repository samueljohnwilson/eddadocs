import { Foes } from '@/enums/foes';
import type { BaseArticleData } from '@/types';
import FoesDescription from '../FoesDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Foes.BEAST,
  title: Foes.BEAST.toUpperCase(),
  quote: {
    text:
      'In the light of dawn, we find our purpose. Trust in the First King, and let his will guide our actions towards righteousness.',
    attribution: 'High Priest Elandor, keeper of the Eternal Flame',
  },
  image: {
    url: 'foes/beast-main.webp',
    title: 'A northern bear',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: FoesDescription,
};

export default data;
