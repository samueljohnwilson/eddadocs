import { Races } from '@/enums/races'
import type { BaseArticleData } from '@/types'
import RacesDescription from '../RacesDescription.vue'
import MainComponent from './MainComponent.vue'
import SidebarComponent from './SidebarComponent.vue'

const data: BaseArticleData = {
  id: Races.HALF_ELF,
  title: Races.HALF_ELF.toUpperCase(),
  quote: {
    text: `Ethlyn walk the line between worlds,
    heirs to both the wisdom of the forestfolk and the
    boldness of men.`,
    attribution: 'Wai Galud, Farsir tomekeeper'
  },
  image: {
    url: 'races/half-elf-main.webp',
    title: 'A half-elf of Wydmyn'
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: RacesDescription
}

export default data
