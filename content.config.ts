import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      exclude: ['**/index.md']
    }),
    home: defineCollection({
      type: 'page',
      source: '**/*.md',
    })
  }
})
