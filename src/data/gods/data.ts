import { Gods } from '@/enums/gods';
import agorus from './agorus/data';
import enoreth from './enoreth/data';
import ethKorel from './eth-korel/data';
import malak from './malak/data';
import po from './po/data';
import surad from './surad/data';
import thal from './thal/data';
import ulat from './ulat/data';
import ura from './ura/data';
import type { BaseArticleData } from '@/types';

export default {
  [Gods.AGORUS]: agorus,
  [Gods.ENORETH]: enoreth,
  [Gods.ETH_KOREL]: ethKorel,
  [Gods.MALAK]: malak,
  [Gods.PO]: po,
  [Gods.SURAD]: surad,
  [Gods.THAL]: thal,
  [Gods.ULAT]: ulat,
  [Gods.URA]: ura,
} as Record<Gods, BaseArticleData>;
