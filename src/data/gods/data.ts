import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import agorus from './agorus/data';
import anoreth from './anoreth/data';
import ethKorel from './eth-korel/data';
import malak from './malak/data';
import po from './po/data';
import surad from './surad/data';
import thal from './thal/data';
import ulat from './ulat/data';
import ura from './ura/data';

const data: Record<Gods, BaseArticleData> = {
  [Gods.AGORUS]: agorus,
  [Gods.ANORETH]: anoreth,
  [Gods.ETH_KOREL]: ethKorel,
  [Gods.MALAK]: malak,
  [Gods.PO]: po,
  [Gods.SURAD]: surad,
  [Gods.THAL]: thal,
  [Gods.ULAT]: ulat,
  [Gods.URA]: ura,
};

export default data;
