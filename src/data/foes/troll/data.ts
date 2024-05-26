import { Foes } from '@/enums/foes';
import type { BaseArticleData } from '@/types';
import FoesDescription from '../FoesDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Foes.TROLL,
  title: Foes.TROLL.toUpperCase(),
  quote: {
    text: 'They say the trolls were Ura\'s first creation. Wish the gods had the sense to call it a loss and start again.',
    attribution: 'Yan Freeman, Jut trapper',
  },
  image: {
    url: 'foes/troll-main.webp',
    title: 'A forest troll',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: FoesDescription,
};

export default data;
