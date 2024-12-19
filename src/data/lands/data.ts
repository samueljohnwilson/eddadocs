import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import albia from './albia/data';
import bjordlund from './bjordlund/data';
import emurai from './emurai/data';
import garrad from './garrad/data';
import hetheskein from './hetheskein/data';
import ithra from './ithra/data';
import jutlund from './jutlund/data';
import neywyll from './neywyll/data';
import quat from './quat/data';
import rajapun from './rajapun/data';
import unterlund from './unterlund/data';
import wydmyn from './wydmyn/data';

const data: Record<Lands, BaseArticleData> = {
  [Lands.ALBIA]: albia,
  [Lands.BJORDLUND]: bjordlund,
  [Lands.EMURAI]: emurai,
  [Lands.GARRAD]: garrad,
  [Lands.HETHESKEIN]: hetheskein,
  [Lands.ITHRA]: ithra,
  [Lands.JUTLUND]: jutlund,
  [Lands.NEYWYLL]: neywyll,
  [Lands.QUAT]: quat,
  [Lands.RAJAPUN]: rajapun,
  [Lands.UNTERLUND]: unterlund,
  [Lands.WYDMYN]: wydmyn,
};

export default data;
