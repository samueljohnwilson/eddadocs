import { Gods } from "@/constants/gods";
import surad from '@/data/gods/surad/data';
import ulat from '@/data/gods/ulat/data';
import type { BaseArticleData } from "@/types";
import type { ValueOf } from "@/utils/valueOf";

export default {
  [Gods.SURAD]: surad,
  [Gods.ULAT]: ulat,
} as Partial<Record<ValueOf<typeof Gods>, BaseArticleData>>;