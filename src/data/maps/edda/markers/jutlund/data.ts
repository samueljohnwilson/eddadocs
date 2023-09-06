import { Lands } from '@/enums/lands';
import type { MapMarker } from '@/types';
import JutlundIcon from './JutlundIcon.vue';

const data: MapMarker = {
  name: Lands.JUTLUND,
  coords: [1045, 260],
  component: JutlundIcon,
};

export default data;
