import { Foes } from '@/enums/foes';
import type { BaseArticleData } from '@/types';
import FoesDescription from '../FoesDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Foes.TROLL,
  title: Foes.TROLL.toUpperCase(),
  quote: {
    text: 'They say the trolls were the Einar\'s first creation. Wish the gods had the sense to call it a loss and be rid of \'em, so we weren\'t stuck dealing with the lot.',
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
