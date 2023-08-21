import { Races } from '@/constants/races';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import type { BaseArticleData } from '@/types';
import RacesDescription from '../RacesDescription.vue';

export default {
  id: Races.FIRBOLG,
  title: Races.FIRBOLG.toUpperCase(),
  quote: {
    text: `While the ambition of men is their strength, it is also their weakness.
    That which drives them to achieve is the same
    which compels them to corruption. Few things rival the great heights
    and foul depths of the human spirit.`,
    attribution: 'Calaith Aowen, elven sage',
  },
  image: {
    url: 'races/firbolg-main.webp',
    title: 'A dwarf',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: RacesDescription,
} as BaseArticleData;
