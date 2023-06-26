<template>
  <div>
    <!-- Adds transitions to images -->
    <!-- See https://animate.style/ -->
    <transition
      appear
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn img"
      leave-active-class="animate__animated animate__fadeOut img"
    >
      <v-img
        class="rounded-xl"
        style="cursor: pointer"
        :class="imageClassName"
        :src="getAsset(image)"
        :key="image"
        :width="imageWidth"
        :height="imageHeight"
        :lazy-src="blackBackground"
        @click="showLightbox"
      />
    </transition>
    <p
      class="img-title"
      v-if="imageTitle"
      style="color: grey"
      v-html="imageTitle"
    ></p>
    <VueEasyLightbox
      :teleport="imageClassName"
      zoomDisabled
      moveDisabled
      :scrollDisabled="false"
      :imgs="getAsset(image)"
      :visible="isLightboxVisible"
      @hide="hideLightbox"
    />
  </div>
</template>

<script setup lang="ts">
import 'animate.css';
import blackBackground from '@/assets/black-background.jpg';
import { getAsset } from '@/utils/getAsset';
import { onMounted } from 'vue';

defineProps({
  image: {
    type: String,
    required: true,
  },
  imageClassName: {
    type: String,
  },
  imageHeight: {
    type: String,
    required: true,
  },
  imageWidth: {
    type: String,
    required: true,
  },
  imageTitle: {
    type: String,
    required: false,
  },
});


let isLightboxVisible = false;

function hideLightbox() {
  isLightboxVisible = false;
}

function showLightbox() {
  isLightboxVisible = true;
}

function preventKeydown(e: KeyboardEvent) {
  if (isLightboxVisible) {
    if (e.code && (e.code == 'ArrowUp' || e.code == 'ArrowDown')) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
}

function preventScroll(e: Event): void {
  if (isLightboxVisible) {
    e.preventDefault();
    e.stopPropagation();
  }
}

onMounted(() => {
  window.addEventListener('keydown', preventKeydown);
  window.addEventListener('wheel', preventScroll, { passive: false });
});

</script>

<style>
.animate__animated.img {
  --animate-duration: 2s;
}

.vel-toolbar {
  display: none !important;
}
</style>
@/utils/getAsset