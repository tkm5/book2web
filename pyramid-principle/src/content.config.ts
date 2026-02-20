import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/chapters' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    chapterNumber: z.number().int().min(1),
    chapterTitle: z.string(),
    category: z.enum([
      'writing',
      'thinking',
      'problem-solving',
      'expression',
    ]),
    order: z.number().int(),
  }),
})

export const collections = { chapters }
