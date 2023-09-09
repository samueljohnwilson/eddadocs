import { Maps } from '@/enums/maps';
import type { MapData } from '@/types';
import albia from './markers/albia/data';
import bjordlund from './markers/bjordlund/data';
import garrad from './markers/garrad/data';
import hetheskein from './markers/hetheskein/data';
import iquat from './markers/iquat/data';
import ithra from './markers/ithra/data';
import jutlund from './markers/jutlund/data';
import neywyll from './markers/neywyll/data';
import rajapun from './markers/rajapun/data';
import unterlund from './markers/unterlund/data';
import wydmyn from './markers/wydmyn/data';

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
    markers: [albia, bjordlund, garrad, hetheskein, iquat, ithra, jutlund, neywyll, rajapun, unterlund, wydmyn],
  },
};

export default data;
