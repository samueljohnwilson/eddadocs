<script setup lang="ts">
import Wikipage from '@/components/WikiPage.vue';
import { Gods } from '@/constants/gods';
import { Routes } from '@/enums/routes';
import type { BaseArticleData } from '@/types';
import type { PropType } from 'vue';

defineProps({
  activeGod: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <Wikipage :navElements="Object.values(Gods)" :parentPath="Routes.GODS" :activeArticle="activeGod"/>
</template>
