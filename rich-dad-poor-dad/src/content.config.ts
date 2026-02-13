import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const books = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/books' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    bookId: z.enum(['rich-dad-poor-dad', 'investing-beginner', 'investing-advanced']),
    bookTitle: z.string(),
    chapterNumber: z.number().int().min(1),
    chapterTitle: z.string(),
    partTitle: z.string().optional(),
    category: z
      .enum([
        'mindset',
        'cashflow',
        'investing',
        'business',
        'tax-legal',
        'financial-literacy',
        'practice',
        'advanced-investing',
        'entrepreneurship',
      ])
      .default('mindset'),
    order: z.number().int(),
  }),
})

export const collections = { books }
