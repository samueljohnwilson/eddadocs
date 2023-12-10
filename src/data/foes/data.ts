import { Foes } from '@/enums/foes';
import type { BaseArticleData } from '@/types';
import jotunn from './jotunn/data';

const data: Record<Foes, BaseArticleData> = {
  [Foes.JOTUNN]: jotunn,
  [Foes.KODO]: jotunn,
  [Foes.ORC]: jotunn,
  [Foes.TROLL]: jotunn,
};

export default data;
