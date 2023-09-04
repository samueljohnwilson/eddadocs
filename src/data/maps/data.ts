import { Maps } from '@/enums/maps';
import type { MapList } from '@/types';

const mapList: MapList = {
  [Maps.EDDA]: {
    name: 'Edda',
    value: Maps.EDDA,
    config: {
      bounds: [
        [0, 2500],
        [2500, 0],
      ],
      minZoom: -2,
      maxZoom: 5,
      zoom: -2,
      center: [1250, 1250],
      url:
        'https://www.worldanvil.com/uploads/images/a0442782518cbbc14bce6af5d3f00b2a.jpg',
    },
  },
};

export default mapList;
