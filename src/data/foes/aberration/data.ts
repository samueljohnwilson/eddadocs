import { Foes } from '@/enums/foes';
import type { BaseArticleData } from '@/types';
import FoesDescription from '../FoesDescription.vue';
import MainComponent from './MainComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

const data: BaseArticleData = {
  id: Foes.ABERRATION,
  title: Foes.ABERRATION.toUpperCase(),
  quote: {
    text:
      'Some things dwell outside the stream of time. They are unknowable, perhaps even to the Urdor.',
    attribution: 'From "Bestiaria Edda"',
  },
  image: {
    url: 'foes/aberration-main.webp',
    title: 'A klagan, or hill giant',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: FoesDescription,
};

export default data;
