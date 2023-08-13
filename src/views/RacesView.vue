<script setup lang="ts">
import Wikipage from '@/components/WikiPage.vue';
import { Races } from '@/constants/races';
import { Routes } from '@/constants/routes';
import type { BaseArticleData } from '@/types';
import type { PropType } from 'vue';

defineProps({
  activeRace: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <Wikipage :navElements="Object.values(Races)" :parentPath="Routes.RACES" :activeArticle="activeRace"/>
</template>
