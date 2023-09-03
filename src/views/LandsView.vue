<script setup lang="ts">
import Wikipage from '@/components/WikiPage.vue';
import { Lands } from '@/constants/lands';
import { Routes } from '@/constants/routes';
import type { BaseArticleData } from '@/types';
import type { PropType } from 'vue';

defineProps({
  activeLand: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <Wikipage :navElements="Object.values(Lands)" :parentPath="Routes.LANDS" :activeArticle="activeLand"/>
</template>
