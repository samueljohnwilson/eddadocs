import { Maps } from '@/enums/maps';
import type { MapList } from '@/types';
import edda from './edda/data';

const data: MapList = {
  [Maps.EDDA]: edda,
};

export default data;
