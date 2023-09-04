import { Lands } from '@/enums/lands';
import type { BaseArticleData } from '@/types';
import albia from './albia/data';
import bjordlund from './bjordlund/data';
import hetheskein from './hetheskein/data';
import ithra from './ithra/data';
import neywyll from './neywyll/data';
import wydmyn from './wydmyn/data';

export default {
  [Lands.ALBIA]: albia,
  [Lands.BJORDLUND]: bjordlund,
  [Lands.HETHESKEIN]: hetheskein,
  [Lands.IQUAT]: albia,
  [Lands.ITHRA]: ithra,
  [Lands.JUTLUND]: albia,
  [Lands.NEYWYLL]: neywyll,
  [Lands.RAJAPUN]: albia,
  [Lands.WYDMYN]: wydmyn,
} as Record<Lands, BaseArticleData>;
