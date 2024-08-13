import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig(
  {
    formatter: {
      markdown: true,
    },
  },
  {
    rules: {
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
    },
  },
)
