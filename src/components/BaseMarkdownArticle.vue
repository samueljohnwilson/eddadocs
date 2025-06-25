<template>
  <div class="base-markdown-article">
    <v-container fluid class="base-article-body">
      <v-row>
        <!-- Hide the group description on mobile -->
        <v-col
          v-if="$vuetify.display.mdAndUp && articleData?.groupDescription"
          cols="3"
          class="group-description"
        >
          <component v-bind:is="articleData.groupDescription" />
        </v-col>
        <v-col :cols="$vuetify.display.mdAndUp ? 9 : 12">
          <v-card class="pa-6">
            <v-card-title>
              {{ articleData?.title || articleId }}
            </v-card-title>
            
            <v-row v-if="articleData?.image" align="center" justify="center">
              <v-col :cols="$vuetify.display.smAndDown ? 12 : 8">
                <FadeImage
                  :image="articleData.image.url"
                  :imageTitle="articleData.image.title"
                />
              </v-col>
              <v-col v-if="$vuetify.display.mdAndUp && articleData?.quote" cols="4">
                <QuoteBlock
                  :attribution="articleData.quote.attribution"
                  :quote="articleData.quote.text"
                />
              </v-col>
            </v-row>
            
            <v-row v-if="$vuetify.display.smAndDown && articleData?.quote">
              <v-col cols="12">
                <QuoteBlock
                  :attribution="articleData.quote.attribution"
                  :quote="articleData.quote.text"
                />
              </v-col>
            </v-row>
            
            <v-row>
              <v-col :cols="!articleData?.sidebar || $vuetify.display.smAndDown ? 12 : 8">
                <MarkdownRenderer 
                  v-if="markdownContent"
                  :content="markdownContent" 
                  :file-path="markdownFilePath"
                />
                <div v-else class="text-center pa-8">
                  <v-alert type="warning">
                    Content not found for {{ articleId }}
                  </v-alert>
                </div>
              </v-col>
              <!-- 
                On desktop, if the sidebar exists, show it to the right of the content.
                On mobile, show it below the content.
               -->
              <v-col
                v-if="articleData?.sidebar"
                :cols="$vuetify.display.smAndDown ? 12 : 4"
              >
                <v-card elevation="0" class="sidebar">
                  <component v-bind:is="articleData.sidebar"/>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { type PropType } from 'vue'
import FadeImage from '@/components/FadeImage.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import QuoteBlock from '@/components/QuoteBlock.vue'
import { type BaseMarkdownArticleData } from '@/types'

const props = defineProps({
  articleData: {
    type: Object as PropType<BaseMarkdownArticleData>,
    required: true,
  },
  articleId: {
    type: String,
    required: true,
  },
})

// Reactive data
const markdownContent = ref('')

// Computed
const markdownFilePath = computed(() => {
  return props.articleData?.markdownPath || `/markdown/${props.articleId}.md`
})

const loadContent = async () => {
  if (!props.articleId) {
    return
  }
  
  try {
    // Try to load the markdown file
    const response = await fetch(markdownFilePath.value)
    if (response.ok) {
      const content = await response.text()
      // Remove frontmatter if present
      markdownContent.value = content.replace(/^---[\s\S]*?---\n/, '')
    } else {
      markdownContent.value = ''
    }
  } catch (err) {
    markdownContent.value = ''
  }
}

// Watch for articleId changes
watch(() => props.articleId, () => {
  if (props.articleId) {
    loadContent()
  }
})

// Load content on mount
onMounted(() => {
  if (props.articleId) {
    loadContent()
  }
})
</script>

<style>
.base-markdown-article {
  min-height: 100vh;
}

.base-article-body {
  padding: 0
}

.base-article-body a {
  color: rgb(var(--v-theme-secondary));
}

.base-article-body a:visited {
  color: rgb(var(--v-theme-secondary));
}

.sidebar p {
  padding-bottom: 1rem;
}
</style> 
