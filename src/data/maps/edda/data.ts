import { Maps } from '@/enums/maps';
import type { MapData } from '@/types';
import jutlund from './markers/jutlund/data';
import unterlund from './markers/unterlund/data';

const data: MapData = {
  name: 'Edda',
  value: Maps.EDDA,
  config: {
    bounds: [
      [0, 2048],
      [1536, 0],
    ],
    minZoom: -1,
    maxZoom: 0,
    zoom: -1,
    center: [1024, 768],
    url:
      'https://cdn.discordapp.com/attachments/1008048169621393458/1148389274828427445/Wardenfall.jpg',
    markers: [jutlund, unterlund],
  },
};

export default data;
