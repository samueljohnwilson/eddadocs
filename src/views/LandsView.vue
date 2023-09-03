<script setup lang="ts">
import WikiPage from '@/components/WikiPage.vue';
import { Lands } from '@/enums/lands';
import { Routes } from '@/enums/routes';
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
  <WikiPage :navElements="Object.values(Lands)" :parentPath="Routes.LANDS" :activeArticle="activeLand"/>
</template>
