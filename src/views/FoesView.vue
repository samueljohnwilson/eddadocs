<template>
  <div class="foe-view">
    <NavBar title="Foes" :navElements="Object.values(Foes)" :parentPath="Routes.FOES" />
    <BaseMarkdownArticle :article-data="foeData" :view-name="Routes.FOES" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseMarkdownArticle from '@/components/BaseMarkdownArticle.vue'
import NavBar from '@/components/NavBar.vue'
import foesData from '@/data/foes/data'
import { Foes } from '@/enums/foes'
import { Routes } from '@/enums/routes'

const route = useRoute()
const activeFoe = computed(() => route.name as Foes)
const foeData = computed(() => foesData[activeFoe.value])
</script>
