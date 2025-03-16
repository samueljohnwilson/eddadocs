import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import GodsDescription from '../GodsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Gods.BAYAH,
  title: Gods.BAYAH.toUpperCase(),
  quote: {
    text: 'Bayah\'s blessing upon our bread.',
    attribution: 'Common pre-meal prayer',
  },
  image: {
    url: 'gods/bayah-main.webp',
    title: 'An avatar of Bayah',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: GodsDescription,
};

export default data;
