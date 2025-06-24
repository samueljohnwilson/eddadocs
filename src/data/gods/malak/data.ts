import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.MALAK,
  title: Gods.MALAK.toUpperCase(),
  quote: {
    text:
      'Trust no one, for even the most loyal heart can be turned by the right whisper.',
    attribution: 'Unknown assassin of the Oth-Malak',
  },
  image: {
    url: 'gods/malak-main.webp',
    title: 'Malak',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
