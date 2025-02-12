import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import LandsDescription from '../LandsDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Lands.GARRAD,
  title: Lands.GARRAD.toUpperCase(),
  quote: {
    text:
      'Watch your tongue, boy. You may chase down a stallion that has escaped the herd, but not a word that has escaped your lips.',
    attribution: 'Batu Sarnai, Dal warchief',
  },
  image: {
    url: 'lands/garrad-main.webp',
    title: 'The plains of Garrad',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription,
};

export default data;
