<template>
  <div class="fade-image">
    <!-- Adds transitions to images -->
    <!-- See https://animate.style/ -->
    <transition
      appear
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn img"
      leave-active-class="animate__animated animate__fadeOut img"
    >
      <v-img
        class="rounded-0"
        style="cursor: pointer"
        cover
        :src="getAsset(image)"
        :key="image"
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
  --animate-duration: 1s;
}

.vel-toolbar {
  display: none !important;
}
</style>
@/utils/getAsset
