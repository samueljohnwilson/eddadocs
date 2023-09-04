import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import albia from './albia/data';
import bjordlund from './bjordlund/data';
import garrad from './garrad/data';
import hetheskein from './hetheskein/data';
import iquat from './iquat/data';
import ithra from './ithra/data';
import jutlund from './jutlund/data';
import neywyll from './neywyll/data';
import rajapun from './rajapun/data';
import unterlund from './unterlund/data';
import wydmyn from './wydmyn/data';

export default {
  [Lands.ALBIA]: albia,
  [Lands.BJORDLUND]: bjordlund,
  [Lands.HETHESKEIN]: hetheskein,
  [Lands.GARRAD]: garrad,
  [Lands.IQUAT]: iquat,
  [Lands.ITHRA]: ithra,
  [Lands.JUTLUND]: jutlund,
  [Lands.NEYWYLL]: neywyll,
  [Lands.RAJAPUN]: rajapun,
  [Lands.UNTERLUND]: unterlund,
  [Lands.WYDMYN]: wydmyn,
} as Record<Lands, BaseArticleData>;
