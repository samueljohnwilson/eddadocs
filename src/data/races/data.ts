import { Races } from '@/enums/races';
import type { BaseArticleData } from '@/types';
import dwarf from './dwarf/data';
import elf from './elf/data';
import firbolg from './firbolg/data';
import halfElf from './half-elf/data';
import halfOrc from './half-orc/data';
import halfling from './halfling/data';
import human from './human/data';

export default {
  [Races.DWARF]: dwarf,
  [Races.ELF]: elf,
  [Races.FIRBOLG]: firbolg,
  [Races.HUMAN]: human,
  [Races.HALF_ELF]: halfElf,
  [Races.HALF_ORC]: halfOrc,
  [Races.HALFLING]: halfling,
} as Record<Races, BaseArticleData>;
