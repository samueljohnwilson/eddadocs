
<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LImageOverlay,LMap } from '@vue-leaflet/vue-leaflet';
import { CRS } from 'leaflet';
import type { PropType } from 'vue';
import NavBar from '@/components/NavBar.vue';
import type { MapData } from '@/types';

defineProps({
  navElements: {
    type: Array as PropType<string[]>,
    required: true,
  },
  parentPath: {
    type: String,
    required: true,
  },
  activeMap: {
    type: Object as PropType<MapData>,
    required: true,
  },
});
</script>

<template>
  <v-container class="main">
    <NavBar :navElements="navElements" :parentPath="parentPath" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    />
    <LMap
      class="rounded-xl"
      ref="map"
      style="height: 50rem; width: 100%; background-color: black;"
      :minZoom="activeMap.config.minZoom"
      :maxZoom="activeMap.config.maxZoom"
      :maxBounds="activeMap.config.bounds"
      :zoom="activeMap.config.zoom"
      :center="activeMap.config.center"
      :useGlobalLeaflet="false"
      :crs="CRS.Simple"
    >
      <LImageOverlay
        :url="activeMap.config.url"
        :bounds="activeMap.config.bounds"
      />
    </LMap>
  </v-container>
</template>
