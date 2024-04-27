import { Foes } from '@/enums/foes';
import type { BaseArticleData } from '@/types';
import jotunn from './jotunn/data';
import kodo from './kodo/data';
import orc from './orc/data';
import troll from './troll/data';

const data: Record<Foes, BaseArticleData> = {
  [Foes.JOTUNN]: jotunn,
  [Foes.KODO]: kodo,
  [Foes.ORC]: orc,
  [Foes.TROLL]: troll,
};

export default data;
