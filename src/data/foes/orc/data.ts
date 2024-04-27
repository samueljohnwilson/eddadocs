import { Foes } from '@/enums/foes';
import type { BaseArticleData } from '@/types';
import FoesDescription from '../FoesDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Foes.ORC,
  title: Foes.ORC.toUpperCase(),
  quote: {
    text:
      'Without a doubt, the foulest race to blight our realm. I\'ve heard said they were once kin to elves.',
    attribution: 'Sir Lunder, magistrate of the Even Hand',
  },
  image: {
    url: 'foes/orc-main.webp',
    title: 'An orc warrior',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: FoesDescription,
};

export default data;
