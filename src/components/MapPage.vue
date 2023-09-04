<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LImageOverlay,LMap } from '@vue-leaflet/vue-leaflet';
import { CRS, type LatLngBoundsLiteral, type PointTuple } from 'leaflet';
import type { PropType } from 'vue';
import type { MapData } from '@/types';

defineProps({
  activeMap: {
    type: Object as PropType<MapData>,
    required: true,
  },
});
</script>

<template>
  <LMap
    ref="map"
    style="height: 50rem; width: 100%; background-color: black;"
    :minZoom="activeMap.config.minZoom"
    :maxZoom="activeMap.config.maxZoom"
    :maxBounds="activeMap.config.bounds"
    :zoom="activeMap.config.zoom"
    :center="(activeMap.config.center as PointTuple)"
    :useGlobalLeaflet="false"
    :crs="CRS.Simple"
  >
    <LImageOverlay
      :url="activeMap.config.url"
      :bounds="(activeMap.config.bounds as LatLngBoundsLiteral)"
    />
  </LMap>
</template>

<style>
.leaflet-control-attribution {
  display: none;
}

.leaflet-container {
  border: 1px solid black;
}
</style>
