<script setup lang="ts">
import { type PropType } from 'vue';
import { type BaseArticleData } from '@/types';
import FadeImage from './FadeImage.vue';
import QuoteBlock from './QuoteBlock.vue';

defineProps({
  activeArticle: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <!-- Hide the group description on mobile -->
      <v-col v-if="$vuetify.display.mdAndUp" cols="3" class="group-description">
        <component v-bind:is="activeArticle.groupDescription!" />
      </v-col>
      <v-col :cols="$vuetify.display.mdAndUp ? 9 : 12">
        <v-card class="rounded-0 pa-6">
          <v-card-title>
            {{ activeArticle.title }}
          </v-card-title>
          <v-row align="center" justify="center">
            <!--
              On desktop, show the FadeImage and QuoteBlock side by side.
              On mobile, drop the QuoteBlock into another row under
              the FadeImage.
            -->
            <v-col :cols="$vuetify.display.smAndDown ? 12 : 8">
              <FadeImage
                :image="activeArticle.image.url"
                :imageTitle="activeArticle.image.title"
              />
            </v-col>
            <v-col v-if="$vuetify.display.mdAndUp" cols="4">
              <QuoteBlock
                :attribution="activeArticle.quote.attribution"
                :quote="activeArticle.quote.text"
              />
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.display.smAndDown">
            <v-col cols="12">
              <QuoteBlock
                :attribution="activeArticle.quote.attribution"
                :quote="activeArticle.quote.text"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="!activeArticle.sidebar || $vuetify.display.smAndDown ? 12 : 8">
              <component v-bind:is="activeArticle.content" />
            </v-col>
            <!-- 
              On desktop, if the sidebar exists, show it to the right of the content.
              On mobile, show it below the content.
             -->
            <v-col
              v-if="activeArticle.sidebar"
              :cols="$vuetify.display.smAndDown ? 12 : 4"
            >
              <v-card elevation="0" class="sidebar">
                <component v-bind:is="activeArticle.sidebar"/>
              </v-card>
            </v-col>
          </v-row>
          <!-- <Foot /> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
