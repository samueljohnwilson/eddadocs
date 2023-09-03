import { Races } from '@/enums/races';
import type { BaseArticleData } from '@/types';
import RacesDescription from '../RacesDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

export default {
  id: Races.HUMAN,
  title: Races.HUMAN.toUpperCase(),
  quote: {
    text: `While the ambition of men is their strength, it is also their weakness.
    That which drives them to achieve is the same
    which compels them to corruption. Few things rival the great heights
    and foul depths of the human spirit.`,
    attribution: 'Calaith Aowen, elven sage',
  },
  image: {
    url: 'races/human-main.webp',
    title: 'A human',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: RacesDescription,
} as BaseArticleData;
