<script setup lang="ts">
import type { PropType } from 'vue';
import NavBar from '@/components/NavBar.vue';
import WikiPage from '@/components/WikiPage.vue';
import { Lands } from '@/enums/lands';
import { Routes } from '@/enums/routes';
import type { BaseArticleData } from '@/types';

defineProps({
  activeLand: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <NavBar title="LANDS" :navElements="Object.values(Lands)" :parentPath="Routes.LANDS"/>
  <WikiPage  :activeArticle="activeLand"/>
</template>
