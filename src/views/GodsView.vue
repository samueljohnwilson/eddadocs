<script setup lang="ts">
import type { PropType } from 'vue';
import NavBar from '@/components/NavBar.vue';
import WikiPage from '@/components/WikiPage.vue';
import { Gods } from '@/enums/gods';
import { Routes } from '@/enums/routes';
import type { BaseArticleData } from '@/types';

defineProps({
  activeGod: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <NavBar :navElements="Object.values(Gods)" :parentPath="Routes.GODS"/>
  <WikiPage :activeArticle="activeGod"/>
</template>

<style>
.alignment-icon {
  max-width: 60%;
  max-height: 60%;
}
</style>
