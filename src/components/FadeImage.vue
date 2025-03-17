<script setup lang="ts">
import 'animate.css';
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox'
import blackBackground from '@/assets/black-background.jpg';
import { getAsset } from '@/utils/getAsset';

defineComponent({
  components: {
    VueEasyLightbox
  },
});

defineProps({
  image: {
    type: String,
    required: true,
  },
  imageTitle: {
    type: String,
    required: false,
  },
  className: {
    type: String,
    required: false,
  },
});

let isLightboxVisible = ref(false);

function hideLightbox(): void {
  isLightboxVisible.value = false;
}

function showLightbox(): void {
  isLightboxVisible.value = true;
}

function preventKeydown(e: KeyboardEvent): void {
  if (isLightboxVisible.value) {
    if (e.code && (e.code == 'ArrowUp' || e.code == 'ArrowDown')) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
}

function preventScroll(e: Event): void {
  if (isLightboxVisible.value) {
    e.preventDefault();
    e.stopPropagation();
  }
}

onMounted(() => {
  window.addEventListener('keydown', preventKeydown);
  window.addEventListener('wheel', preventScroll, { passive: false });
});

onUnmounted(() => {
  window.removeEventListener('keydown', preventKeydown);
  window.removeEventListener('wheel', preventScroll);
});
</script>

<template>
  <div class="fade-img-container">
    <!-- Adds transitions to images -->
    <!-- See https://animate.style/ -->
    <transition
      appear
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn img"
      leave-active-class="animate__animated animate__fadeOut img"
    >
      <v-img
        style="cursor: pointer"
        cover
        class="fade-img"
        :src="getAsset(image)"
        :key="image"
        :lazy-src="blackBackground"
        :class="className"
        @click=showLightbox
      />
    </transition>
  </div>
  <p
    v-if="imageTitle"
    style="color: grey"
    v-html="imageTitle"
  ></p>
  <VueEasyLightbox
    :visible="isLightboxVisible"
    :imgs="getAsset(image)"
    @hide="hideLightbox"
    zoom-disabled
    move-disabled
  />
</template>

<style>
.animate__animated.img {
  --animate-duration: 1s;
}

.fade-img-container {
  overflow: hidden;
  display: inline-block;
  position: relative;
}

.fade-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.0s ease-in-out;
}

.fade-img-container:hover .fade-img {
  transform: scale(1.1);
}

/* Don't want to show the vue-easy-lightbox toolbar */
.vel-toolbar {
  display: none !important;
}

.vel-img-wrapper {
  cursor: default !important;
}
</style>
