<template>
  <v-container>
    <h1>{{ data.title }}</h1>
    <v-card class="base rounded-xl">
      <v-row align="center" justify="center">
        <v-col :cols="$vuetify.display.smAndDown ? 12 : 8">
          <FadeImage
            :image="data.image.url"
            :imageTitle="data.image.title"
            imageHeight="40rem"
            imageWidth="40rem"
          />
        </v-col>
        <v-col v-if="$vuetify.display.mdAndUp" cols="4">
          <QuoteBlock
            :quoteAttribution="data.quote.attribution"
            :quote="data.quote"
          />
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.display.smAndDown">
        <v-col cols="12">
          <QuoteBlock
            :quoteAttribution="data.quote.attribution"
            :quote="data.quote"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="!data.sidebar || $vuetify.display.smAndDown ? 12 : 8">
          <component v-bind:is="data.content" />
        </v-col>
        <v-col
          v-if="data.sidebar"
          :cols="$vuetify.display.smAndDown ? 12 : 4"
        >
          <v-card
            class="sidebar rounded-xl"
            style="padding: 1rem"
            elevation="0"
          >
            <component v-bind:is="data.sidebar" />
          </v-card>
        </v-col>
      </v-row>
      <!-- <Foot /> -->
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { type BaseArticleData } from '@/types';
import { type PropType } from 'vue';
import FadeImage from './FadeImage.vue';

defineProps({
  data: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>