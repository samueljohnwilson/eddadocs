<template>
  <div class="race-view">
    <NavBar :title="Routes.RACES" :navElements="Object.values(Races)" :parentPath="Routes.RACES"/>
    <BaseMarkdownArticle :article-data="raceData" :view-name="Routes.RACES" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseMarkdownArticle from '@/components/BaseMarkdownArticle.vue';
import NavBar from '@/components/NavBar.vue';
import racesData from '@/data/races/data';
import { Races } from '@/enums/races';
import { Routes } from '@/enums/routes';

const route = useRoute();
const raceData = computed(() => racesData[route.name as Races]);
</script>
