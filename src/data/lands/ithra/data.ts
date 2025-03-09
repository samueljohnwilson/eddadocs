import { Lands } from '@/enums/lands'
import type { BaseArticleData } from '@/types'
import LandsDescription from '../LandsDescription.vue'
import MainComponent from './MainComponent.vue'
import SidebarComponent from './SidebarComponent.vue'

const data: BaseArticleData = {
  id: Lands.ITHRA,
  title: Lands.ITHRA.toUpperCase(),
  quote: {
    text: 'Ithra is a rose growing from the barren desert. But it is not without its thorns.',
    attribution: 'Oyer Marn, Untish merchant'
  },
  image: {
    url: 'lands/ithra-main.webp',
    title: 'The city of El-Khara',
  },
  content: MainComponent,
  sidebar: SidebarComponent,
  groupDescription: LandsDescription
}

export default data
