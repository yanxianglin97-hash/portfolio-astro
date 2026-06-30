import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    titleZh:    z.string(),
    titleEn:    z.string(),
    year:       z.number(),
    medium:     z.string(),
    mediumEn:   z.string(),
    dimensions: z.string().optional(),
    duration:   z.string().optional(),
    coverImage: z.string(),
    images:     z.array(z.string()).default([]),
    descZh:     z.string(),
    descEn:     z.string(),
    tags:       z.array(z.string()).default([]),
    featured:   z.boolean().default(false),
  }),
});

export const collections = { projects };
