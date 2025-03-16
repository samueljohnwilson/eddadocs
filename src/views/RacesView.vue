<script setup lang="ts">
import type { PropType } from 'vue';
import NavBar from '@/components/NavBar.vue';
import WikiPage from '@/components/WikiPage.vue';
import { Races } from '@/enums/races';
import { Routes } from '@/enums/routes';
import type { BaseArticleData } from '@/types';

defineProps({
  activeRace: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <NavBar title="RACES" :navElements="Object.values(Races)" :parentPath="Routes.RACES"/>
  <WikiPage :activeArticle="activeRace"/>
</template>
