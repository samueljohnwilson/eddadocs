import { Foes } from '@/enums/foes';
import type { BaseArticleData } from '@/types';
import angel from './angel/data';
import demon from './demon/data';
import fey from './fey/data';
import jotunn from './jotunn/data';
import kodo from './kodo/data';
import orc from './orc/data';
import troll from './troll/data';

const data: Record<Foes, BaseArticleData> = {
  [Foes.ANGEL]: angel,
  [Foes.DEMON]: demon,
  [Foes.FEY]: fey,
  [Foes.JOTUNN]: jotunn,
  [Foes.KODO]: kodo,
  [Foes.ORC]: orc,
  [Foes.TROLL]: troll,
}

export default data
