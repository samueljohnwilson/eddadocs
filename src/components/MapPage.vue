<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import { LImageOverlay,LMap, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import { CRS, Icon } from 'leaflet';
import type { PropType } from 'vue';
import positionMarker from '@/assets/icons/position-marker.png';
import MapIcon from '@/data/maps/MapIcon.vue';
import type { MapData } from '@/types';

defineProps({
  activeMap: {
    type: Object as PropType<MapData>,
    required: true,
  },
});

const icon = new Icon({
  iconUrl: positionMarker,
  iconSize: [48, 48],
  iconAnchor: [24, 48],
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
    :center="activeMap.config.center"
    :useGlobalLeaflet="false"
    :crs="CRS.Simple"
  >
    <LImageOverlay
      :url="activeMap.config.url"
      :bounds="activeMap.config.bounds"
    />
    <LMarker v-for="marker in activeMap.config.markers" 
      :key="marker.name"
      :latLng="marker.coords"
      :icon="icon"
    >
      <LPopup :keepInView="true">
        <MapIcon :title="marker.name" :description="marker.description" :link="marker.link" />
      </LPopup>
    </LMarker>
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
