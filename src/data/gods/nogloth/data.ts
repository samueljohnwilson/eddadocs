import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.NOGLOTH,
  title: Gods.NOGLOTH.toUpperCase(),
  quote: {
    text: 'He waits in the cough, in the wound, in the rot—as patient as the grave.',
    attribution: 'Father Rennet, Order of the Blessed Sun',
  },
  image: {
    url: 'gods/nogloth-main.webp',
    title: 'An avatar of Nogloth',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
