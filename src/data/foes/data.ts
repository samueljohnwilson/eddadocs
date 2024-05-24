import { Foes } from '@/enums/foes'
import type { BaseArticleData } from '@/types'
import aberration from './aberration/data'
import angel from './angel/data'
import beast from './beast/data'
import demon from './demon/data'
import dragon from './dragon/data'
import elemental from './elemental/data'
import fey from './fey/data'
import jotunn from './jotunn/data'
import kodo from './kodo/data'
import orc from './orc/data'
import troll from './troll/data'
import undead from './undead/data'

const data: Record<Foes, BaseArticleData> = {
  [Foes.ANGEL]: angel,
  [Foes.DEMON]: demon,
  [Foes.FEY]: fey,
  [Foes.JOTUNN]: jotunn,
  [Foes.KODO]: kodo,
  [Foes.ORC]: orc,
  [Foes.TROLL]: troll,
  [Foes.BEAST]: beast,
  [Foes.ELEMENTAL]: elemental,
  [Foes.DRAGON]: dragon,
  [Foes.UNDEAD]: undead,
  [Foes.ABERRATION]: aberration
}

export default data
