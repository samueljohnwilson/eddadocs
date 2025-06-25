<template>
  <div class="markdown-renderer" v-html="renderedContent"></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Props
interface Props {
  content: string
  filePath?: string
}

const props = withDefaults(defineProps<Props>(), {
  filePath: ''
})

// Router for internal navigation
const router = useRouter()

// Markdown-it instance
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
})

// Custom renderer for internal links
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  const href = token.attrs?.[0]?.[1]
  
  // Check if it's an internal link (starts with /)
  if (href && href.startsWith('/')) {
    // Add click handler and styling for internal links
    token.attrSet('class', 'internal-link')
    token.attrSet('onclick', `handleInternalLink('${href}')`)
    token.attrSet('style', 'cursor: pointer; text-decoration: underline;')
  }
  
  return self.renderToken(tokens, idx, options)
}

// Handle internal link clicks
const handleInternalLink = (href: string) => {
  router.push(href)
}

// Render markdown content
const renderedContent = computed(() => {
  if (!props.content) return ''
  
  try {
    return md.render(props.content)
  } catch (error) {
    console.error('Error rendering markdown:', error)
    return `<p>Error rendering content: ${error}</p>`
  }
})

// Add global click handler for internal links
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (target.classList.contains('internal-link')) {
      event.preventDefault()
      const href = target.getAttribute('href')
      if (href) {
        handleInternalLink(href)
      }
    }
  })
})
</script>
