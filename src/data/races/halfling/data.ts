import { Races } from '@/enums/races'
import type { BaseArticleData } from '@/types'
import RacesDescription from '../RacesDescription.vue'
import MainComponent from './MainComponent.vue'
import SidebarComponent from './SidebarComponent.vue'

const data: BaseArticleData = {
  id: Races.HALFLING,
  title: Races.HALFLING.toUpperCase(),
  quote: {
    text: `In the countryside, there are none as trustworthy
    as the halflings; in the cities, you can trust them
    too—so long as you've got coins to offer.`,
    attribution: 'Haven Thorne, trader',
  },
  image: {
    url: 'races/halfling-main.webp',
    title: 'A dwarf'
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: RacesDescription
}

export default data
