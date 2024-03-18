import { z, defineCollection } from "astro:content";

const researchCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // tags: z.array(z.string()),
    // image: z.string().optional(),
    description: z.string(),
    publishedAt: z.date().default(() => new Date()),
  }),
});

export const collections = {
  research_papers: researchCollection,
};
