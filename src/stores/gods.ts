import { computed, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { STORES } from './stores';
import cerrunos from '@/data/cerrunos/Cerrunos';
import type { BaseArticleData } from '@/types';
import { Gods } from '@/constants/gods';

export const useGodsStore = defineStore(STORES.GODS, () => {
  let currentGod = Gods.CERRUNOS;
  const gods: Ref<Partial<Record<Gods, BaseArticleData>>> = ref({
    [Gods.CERRUNOS]: cerrunos,
  });
  const activeGod = computed(() => gods.value[currentGod]);

  function setActiveGod(god: Gods) {
    currentGod = god;
  }

  return { gods, activeGod, setActiveGod };
});
