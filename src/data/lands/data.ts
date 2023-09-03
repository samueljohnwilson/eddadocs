import type { BaseArticleData } from '@/types';
import albia from './albia/data';
import { Lands } from '@/enums/lands';

export default {
  [Lands.ALBIA]: albia,
  [Lands.BJORDLUND]: albia,
  [Lands.HETHESKEIN]: albia,
  [Lands.IQUAT]: albia,
  [Lands.ITHRA]: albia,
  [Lands.JUTLUND]: albia,
  [Lands.NEYWYLL]: albia,
  [Lands.RAJAPUN]: albia,
  [Lands.WYDMYN]: albia,
} as Record<Lands, BaseArticleData>;
