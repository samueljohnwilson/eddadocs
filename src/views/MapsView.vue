<script setup lang="ts">
import type { PropType } from 'vue';
import MapPage from '@/components/MapPage.vue';
import NavBar from '@/components/NavBar.vue';
import { Maps } from '@/enums/maps';
import { Routes } from '@/enums/routes';
import type { MapData } from '@/types';

defineProps({
  activeMap: {
    type: Object as PropType<MapData>,
    required: true,
  },
});
</script>

<template>
  <NavBar :navElements="Object.values(Maps)" :parentPath="Routes.MAPS"/>
  <MapPage :activeMap="activeMap"/>
</template>
