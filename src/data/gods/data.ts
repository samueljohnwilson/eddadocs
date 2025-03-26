import { Gods } from '@/enums/gods';
import type { BaseArticleData } from '@/types';
import agorus from './agorus/data';
import anoreth from './anoreth/data';
import bargon from './bargon/data';
import bayah from './bayah/data';
import dosha from './dosha/data';
import ethKorel from './eth-korel/data';
import golin from './golin/data';
import lamnash from './lamnash/data';
import malak from './malak/data';
import nogloth from './nogloth/data';
import othar from './othar/data';
import po from './po/data';
import surad from './surad/data';
import thal from './thal/data';
import ulat from './ulat/data';
import ura from './ura/data';

const data: Record<Gods, BaseArticleData> = {
  [Gods.AGORUS]: agorus,
  [Gods.ANORETH]: anoreth,
  [Gods.BARGON]: bargon,
  [Gods.BAYAH]: bayah,
  [Gods.DOSHA]: dosha,
  [Gods.ETH_KOREL]: ethKorel,
  [Gods.GOLIN]: golin,
  [Gods.LAMNASH]: lamnash,
  [Gods.MALAK]: malak,
  [Gods.NOGLOTH]: nogloth,
  [Gods.OTHAR]: othar,
  [Gods.PO]: po,
  [Gods.SURAD]: surad,
  [Gods.THAL]: thal,
  [Gods.ULAT]: ulat,
  [Gods.URA]: ura,
  [Gods.VALEYA]: golin,
};

export default data;
