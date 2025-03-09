import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.QUAT,
  title: Lands.QUAT.toUpperCase(),
  quote: {
    text:
      'From our ship, we saw only verdant jungle. Inland, we found cities the rival of Highdroth.',
    attribution: 'Excerpt from the captain\'s log of the Untish ship "Mistral"',
  },
  image: {
    url: 'lands/quat-main.webp',
    title: 'An avatar of Agorus',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
