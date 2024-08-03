import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.AGORUS,
  title: Gods.AGORUS.toUpperCase(),
  quote: {
    text:
      'Nothing escapes the All-Seer\'s gaze.',
    attribution: 'Overheard at the Acumenium',
  },
  image: {
    url: 'gods/agorus-main.webp',
    title: 'An avatar of Agorus',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
