import { Lands } from '@/enums/lands';
import type { MapMarker } from '@/types';
import UnterlundIcon from './UnterlundIcon.vue';

const data: MapMarker = {
  name: Lands.UNTERLUND,
  coords: [785, 520],
  component: UnterlundIcon,
};

export default data;
