<script setup lang="ts">
import Wikipage from '@/components/Wikipage.vue';
import { storeToRefs } from 'pinia';
import { useGodsStore } from '../stores/gods';

const { gods, activeGod } = storeToRefs(useGodsStore());
const { setActiveGod } = useGodsStore();
</script>

<template>
  <Wikipage :articles="gods" :activeArticle="activeGod" :setActiveArticle="setActiveGod" />
</template>


